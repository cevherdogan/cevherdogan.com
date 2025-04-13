# Safe trial run
./vercel-cleanup.sh delete-preview --dry-run

# With env variable override
PROJECT_NAME=pepcubes-lite ./vercel-cleanup.sh delete-errors

# List teams for interactive setup
./vercel-cleanup.sh list-teams


