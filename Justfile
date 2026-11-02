default:
    @just --list

dev:
    @bun run dev

build:
    @bun run build

serve:
    @bun run build
    @bun run preview
