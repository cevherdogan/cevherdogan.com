rsync -avz --progress ./ \
  -e "ssh -p 65002" \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next' \
  ./ u217081295@46.202.182.225:/home/u217081295/domains/dev-387devonshire.foundral.tech/public_html


