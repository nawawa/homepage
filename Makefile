up:
	docker compose up -d

down:
	docker compose down

dev:
	docker compose exec app sh -c 'yarn dev'