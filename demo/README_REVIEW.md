### 🧩 **Catalog of Product Demo Websites**

| Website URL                                        | Project Name           | Suggested Tier     | Stripe Product ID      | Status           |
| -------------------------------------------------- | ---------------------- | ------------------ | ---------------------- | ---------------- |
| `https://hostinger.horizons` *(or placeholder)*    | Hostinger Horizons     | Free / Silver      | `prod_hostinger_001`   | Demo/Template    |
| `https://sahibinden.previewhub-dev.com`            | Sahibinden Clone       | Gold               | `prod_sahibinden_001`  | Live             |
| `https://aloevera.previewhub-dev.com`              | AloeVera Storefront    | Silver             | `prod_alovera_001`     | Live             |
| `https://furniturestore.previewhub-dev.com`        | Furniture Store        | Gold               | `prod_furnistore_001`  | Live             |
| `https://furniture.previewhub-dev.com`             | Furniture (Alt Layout) | Silver             | `prod_furnialt_001`    | Live             |
| `https://health.previewhub-dev.com`                | Health Products        | Gold / Premier     | `prod_health_001`      | Live             |
| `https://foundral.tech`                            | Foundral Site          | Premier            | `prod_foundral_001`    | Under Dev        |
| `https://h-dev.foundral.tech`                      | Foundral Dev           | Internal / Creator | `prod_foundraldev_001` | Internal         |
| `https://387devonshire.foundral.tech`              | Real Estate Showcase   | Premier            | `prod_387devon_001`    | Real Estate Demo |

---

### 🛠 **Suggested Additions for DB Table `products`**

| Name            | Short Desc          | Long Desc                                 | Tier    | Demo URL                            | Stripe ID             |
| --------------- | ------------------- | ----------------------------------------- | ------- | ----------------------------------- | --------------------- |
| AloeVera Site   | Health template     | Plant-based product showcase with cart    | Silver  | `aloevera.previewhub-dev.com`       | `prod_alovera_001`    |
| Furniture Store | Product catalog     | Full eCommerce template for furniture     | Gold    | `furniturestore.previewhub-dev.com` | `prod_furnistore_001` |
| Health Store    | Advanced health hub | Subscription-ready with category sections | Premier | `health.previewhub-dev.com`         | `prod_health_001`     |

---

### 🧱 Your Next Step: Pages in GitHub Pages Repo

You'll create:

* `/tiers/free.html`
* `/tiers/silver.html`
* `/tiers/gold.html`
* `/tiers/premier.html`

Each will pull from metadata like above and present:

* Product cards with title, image, demo link
* Stripe "Subscribe" button
* Optional "Request Template" form for partners

