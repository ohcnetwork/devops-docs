# Deploy Ayushma 

## Repositories 📂

- **[Ayushma](https://github.com/coronasafe/ayushma)**: Empowering Nurses with Multilingual ICU Protocols. Leveraging the rapid advancements in AI technology, created multilingual interfaces that assist nurses in rapidly upgrading their knowledge about ICU protocols. 💉

- **[Ayushma_fe](https://github.com/coronasafe/ayushma_fe)**: Auto deployed to ayushma.ohc.in for production branch. All pull requests have preview builds powered by Vercel. 🌐

## Requirements 📋

- Python 3.8 🐍
- Postgres 15 🐘
- OpenAI Account with a valid API Key 🔑
- Pinecone Account with a valid API Key 🔍

## Env Variables 🔑

| Variable | Description |
| --- | --- |
| AI_NAME | Name of the AI (default: Ayushma) |
| OPENAI_API_KEY | OpenAI API Key 🔑 |
| PINECONE_API_KEY | Pinecone API Key 🔍 |
| PINECONE_ENVIRONMENT | Pinecone Environment |
| PINECONE_INDEX | Pinecone Index |
| CURRENT_DOMAIN | Current Domain where the frontend is hosted. ex. `https://ayushma.ohc.network` |
| EMAIL_HOST | SES Email Host (Optional) ✉️ |
| EMAIL_USER | SES Email User (Optional) ✉️ |
| EMAIL_PASSWORD | SES Email Password (Optional) ✉️ |
| GOOGLE_APPLICATION_CREDENTIALS | Google Cloud Credentials (Optional). These should be in a file named `gc_credential.json` in the root of the project ☁️ |
| S3_SECRET_KEY | AWS S3 Secret Key (Optional) 🔑 |
| S3_KEY_ID | AWS S3 Key ID (Optional) 🔑 |
| S3_BUCKET_NAME | AWS S3 Bucket Name (Optional) 🗄️ |
| S3_REGION | AWS S3 Region (Optional) 🌍 |
| GOOGLE_RECAPTCHA_SECRET_KEY | Google Recaptcha Secret Key (Optional) 🔐 |

## Images Required 🖼️

- [Ayushma:latest](https://ghcr.io/coronasafe/ayushma:production-latest): Latest production Image from GitHub container registry 📦
- [postgres:15](https://hub.docker.com/layers/library/postgres/15.6-bookworm/images/sha256-6a651bc46a96bd9466e6fc10182a1edfbda61b48e26258bef94bf3efc55768e8?context=explore): Postgres 15 pulled from [Docker Hub](https://hub.docker.com/) 🐘
- [redis:6](https://hub.docker.com/layers/library/redis/6.2.14-bookworm/images/sha256-060f8a0188a2b34c58172318b5000ffbace63201a4973155842ae38cdadf0865?context=explore): Redis is an open-source, networked, in-memory, key-value data store with optional durability. 🔴
- [watchtower](https://hub.docker.com/r/containrrr/watchtower): With watchtower you can update the running version of your containerized app simply by pushing a new image to the Docker Hub or your own image registry. Watchtower will pull down your new image, gracefully shut down your existing container and restart it with the same options that were used when it was deployed initially. 