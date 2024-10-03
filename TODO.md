# Checklist
> **⚠️ Reminder**
> Please delete this file after completing the check list

## Replace placeholder text on the following files:
- [.env.dev.example](./.env.dev.example)
- [.env.jenkins](./.env.jenkins)
- [.env.prod.example](./.env.prod.example)
- [docker-compose.prod.yml](./docker-compose.prod.yml)
- [Dockerfile.prod](./Dockerfile.prod)
- [package.json](./package.json)
- [README.md](./README.md)
- [swagger.ts](./config//swagger.ts)

## Placeholders
- {{ database_name }}
- {{ project_name }}
- {{ project_name_for_human }}

## Update application port
- [.env.dev.example](./.env.dev.example)
- [.env.jenkins](./.env.jenkins)
- [.env.prod.example](./.env.prod.example)
- [.env.dev.example for monorepo](../../.env.dev.example)
- [docker-compose.yml for monorepo](../../docker-compose.yml)

## Add service to postStartCommand
- [docker-compose.yml for monorepo](../../.devcontainer/devcontainer.json)