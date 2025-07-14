from PIL import Image
import sys
from pathlib import Path

def make_thumbnail(image_path, size=(300, 200)):
    image_path = Path(image_path)
    if not image_path.exists():
        print(f"❌ File not found: {image_path}")
        return

    output_dir = image_path.parent
    output_path = output_dir / f"{image_path.stem}_thumb{image_path.suffix}"

    with Image.open(image_path) as img:
        img.thumbnail(size)
        img.save(output_path)
        print(f"✅ Thumbnail saved: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python make_thumbnail.py path/to/image.png")
    else:
        make_thumbnail(sys.argv[1])

