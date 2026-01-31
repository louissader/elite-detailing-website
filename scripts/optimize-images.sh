#!/bin/bash

# Image Optimization Script for Elite Detailing
# Requires: ImageMagick (brew install imagemagick) or sharp-cli (npm install -g sharp-cli)
#
# This script will:
# 1. Resize images to reasonable web dimensions
# 2. Compress JPEGs to reduce file size
# 3. Create WebP versions for modern browsers

IMAGES_DIR="src/assets/images"

echo "🖼️  Elite Detailing Image Optimizer"
echo "===================================="

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick found"

    # Process car images
    echo ""
    echo "📸 Optimizing car images..."
    for img in "$IMAGES_DIR/cars"/*.{jpg,jpeg,JPG,JPEG}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            base="${filename%.*}"

            # Get current size
            size=$(du -h "$img" | cut -f1)
            echo "  Processing: $filename ($size)"

            # Resize to max 1920px width, quality 85%
            convert "$img" -resize "1920x1920>" -quality 85 -strip "${IMAGES_DIR}/cars/${base}-optimized.jpg"

            # Create WebP version
            convert "$img" -resize "1920x1920>" -quality 85 "${IMAGES_DIR}/cars/${base}.webp"

            newsize=$(du -h "${IMAGES_DIR}/cars/${base}-optimized.jpg" | cut -f1)
            echo "    ✓ Optimized: $newsize"
        fi
    done

    # Process jet images
    echo ""
    echo "✈️  Optimizing jet images..."
    for img in "$IMAGES_DIR/jets"/*.{jpg,jpeg,JPG,JPEG}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            base="${filename%.*}"

            size=$(du -h "$img" | cut -f1)
            echo "  Processing: $filename ($size)"

            convert "$img" -resize "1920x1920>" -quality 85 -strip "${IMAGES_DIR}/jets/${base}-optimized.jpg"
            convert "$img" -resize "1920x1920>" -quality 85 "${IMAGES_DIR}/jets/${base}.webp"

            newsize=$(du -h "${IMAGES_DIR}/jets/${base}-optimized.jpg" | cut -f1)
            echo "    ✓ Optimized: $newsize"
        fi
    done

    # Process team images
    echo ""
    echo "👥 Optimizing team images..."
    for img in "$IMAGES_DIR/team"/*.{jpg,jpeg,JPG,JPEG}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            base="${filename%.*}"

            size=$(du -h "$img" | cut -f1)
            echo "  Processing: $filename ($size)"

            # Team photos can be smaller (max 800px)
            convert "$img" -resize "800x800>" -quality 85 -strip "${IMAGES_DIR}/team/${base}-optimized.jpg"
            convert "$img" -resize "800x800>" -quality 85 "${IMAGES_DIR}/team/${base}.webp"

            newsize=$(du -h "${IMAGES_DIR}/team/${base}-optimized.jpg" | cut -f1)
            echo "    ✓ Optimized: $newsize"
        fi
    done

    echo ""
    echo "✅ Optimization complete!"
    echo ""
    echo "Next steps:"
    echo "1. Review the optimized images"
    echo "2. Replace original imports with optimized versions"
    echo "3. Delete original large files after verification"

else
    echo "❌ ImageMagick not found"
    echo ""
    echo "Install with: brew install imagemagick"
    echo "Or use an online tool like squoosh.app"
    echo ""
    echo "Recommended settings:"
    echo "  - Max width: 1920px (hero/background), 800px (team photos)"
    echo "  - Quality: 80-85%"
    echo "  - Format: WebP with JPEG fallback"
fi
