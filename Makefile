up:
	docker compose up -d

down:
	docker compose down

node:
	docker compose exec app sh

dev:
	docker compose exec app sh -c 'yarn dev'