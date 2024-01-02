FROM docker.io/oven/bun:1-alpine as BUILD_IMAGE

# go to work folder
WORKDIR /usr/src/app

ADD --chown=bun:bun package.json bun.lockb ./
ADD --chown=bun:bun server/package.json server/bun.lockb ./server/

# install dependencies
RUN bun install --frozen-lockfile && \
cd server && \
bun install --frozen-lockfile

# Add project files
ADD --chown=bun:bun . .

# build
RUN cd server && \
bun run compile

# remove dev dependencies (bun do not yet support "prune")
RUN cd server && \
rm -rf node_modules && \
bun install --frozen-install --production

# go to another VM
FROM docker.io/oven/bun:1-alpine as PROD_IMAGE

# inform software to be in production
ENV NODE_ENV=production

# run as non root user
USER bun

# go to work folder
WORKDIR /usr/src/app

# copy from build image
COPY --chown=bun:bun --from=BUILD_IMAGE /usr/src/app/server/generated ./generated
COPY --chown=bun:bun --from=BUILD_IMAGE /usr/src/app/server/node_modules ./node_modules
COPY --chown=bun:bun --from=BUILD_IMAGE /usr/src/app/server/src ./src
COPY --chown=bun:bun --from=BUILD_IMAGE /usr/src/app/server/public ./public
COPY --chown=bun:bun --from=BUILD_IMAGE /usr/src/app/server/package.json ./package.json

# Expose port
EXPOSE 3000

# run it !
CMD ["bun", "run", "start"]
