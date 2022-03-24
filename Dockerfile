FROM node:16-alpine
RUN mkdir /app
WORKDIR /app
RUN npm install -g pnpm@6.27.1
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/remix/package.json apps/remix/package.json
COPY apps/remix/ apps/remix/

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\
      pnpm fetch
COPY . ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\
     pnpm -r install --frozen-lockfile

ENV PORT=8080
ENV NODE_ENV production

CMD [ "pnpm", "build", "--filter \"@remix-expo/remix\"" ]
CMD [ "pnpm", "start", "--filter \"@remix-expo/remix\"" ]