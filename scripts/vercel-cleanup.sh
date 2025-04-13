#!/bin/bash

# === vercel-cleanup.sh ===
# CLI tool to manage and clean Vercel deployments (works in personal/team scopes)


# cevherd-gmailcom
# PROJECT_NAME="pepcubes-lite"
# TEAM_SCOPE="cevherd-gmailcom"
# PROJECT_NAME="pepcubes-us-com"
# PROJECT_NAME="cevherdogan-com"

# Configuration (OPTIONAL override via env or CLI args)
PROJECT_NAME=${PROJECT_NAME:-""}
TEAM_SCOPE=${TEAM_SCOPE:-""}
DRY_RUN=false

show_help() {
  echo ""
  echo "Usage: ./vercel-cleanup.sh [command]"
  echo ""
  echo "Commands:"
  echo "  list                  List all deployments (default scope)"
  echo "  list-teams            Show available team scopes"
  echo "  delete-all            Remove all deployments (Preview + Production + Error)"
  echo "  delete-preview        Remove all Preview deployments"
  echo "  delete-errors         Remove deployments with status Error"
  echo "  help                  Show this help message"
  echo ""
  echo "Env overrides:"
  echo "  PROJECT_NAME=\"my-project\""
  echo "  TEAM_SCOPE=\"my-team\""
  echo ""
  echo "Examples:"
  echo "  PROJECT_NAME=pepcubes-lite ./vercel-cleanup.sh delete-preview"
  echo "  ./vercel-cleanup.sh --help"
  echo ""
  echo "🧭 Vercel Context:"
  vercel whoami
}

list_deployments() {
  echo "📋 Listing deployments"
  vercel list
}

list_teams() {
  echo "👥 Available teams and personal accounts:"
  vercel teams ls || echo "⚠️ Requires Vercel CLI version <41 or token scope"
}

delete_all() {
  echo "⚠️ Deleting ALL deployments (Preview + Prod + Error)"
  vercel list | grep -Eo 'https://[^ ]+' | sed 's|https://||' | while read id; do
    echo "🗑️ Removing $id"
    if [ "$DRY_RUN" = false ]; then
      vercel remove "$id" --yes
    fi
  done
}

delete_preview() {
  echo "🧪 Deleting Preview deployments"
  vercel list | grep Preview -B1 | grep -Eo 'https://[^ ]+' | sed 's|https://||' | while read id; do
    echo "🧹 Removing preview: $id"
    if [ "$DRY_RUN" = false ]; then
      vercel remove "$id" --yes
    fi
  done
}

delete_errors() {
  echo "💥 Deleting deployments with Error status"
  vercel list | grep Error -B1 | grep -Eo 'https://[^ ]+' | sed 's|https://||' | while read id; do
    echo "🔥 Removing error deployment: $id"
    if [ "$DRY_RUN" = false ]; then
      vercel remove "$id" --yes
    fi
  done
}

# Parse optional CLI overrides
while [[ "$1" == --* ]]; do
  case "$1" in
    --project=*) PROJECT_NAME="${1#*=}" ;;
    --scope=*) TEAM_SCOPE="${1#*=}" ;;
    --dry-run) DRY_RUN=true ;;
    --help|-h) show_help; exit 0 ;;
    *) echo "Unknown option: $1"; show_help; exit 1 ;;
  esac
  shift
done

# Command dispatcher
case "$1" in
  list) list_deployments ;;
  list-teams) list_teams ;;
  delete-all) delete_all ;;
  delete-preview) delete_preview ;;
  delete-errors) delete_errors ;;
  help|--help|-h) show_help ;;
  *) show_help ;;
esac



