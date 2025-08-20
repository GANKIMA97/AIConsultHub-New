#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
npm install

echo "Dependencies installed successfully"

# Build the frontend
echo "Building frontend with Vite..."
cd client && npx vite build --outDir ../dist/public
cd ..

echo "Frontend built successfully"

# Build the backend
echo "Building backend with esbuild..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Backend built successfully"
echo "Build process completed!"