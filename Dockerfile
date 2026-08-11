FROM docker.io/oven/bun:1-alpine AS build

# go to work folder
WORKDIR /usr/src/app

# Add git as it is used to fetch updated times
RUN apk add git\
	&& git config --global safe.directory '*'\
	&& chown -R bun:bun .

USER bun

ADD --chown=bun:bun package.json bun.lock ./
ADD --chown=bun:bun server/package.json server/bun.lock ./server/

# install dependencies
RUN bun install --frozen-lockfile

# Add project files
ADD --chown=bun:bun . .

# build
RUN bun scripts/compiler/all.ts

# Install productions packages
RUN cd server && \
	bun install --frozen-install --production

# go to another VM
FROM docker.io/oven/bun:1-alpine AS prod

# inform software to be in production
ENV NODE_ENV=production

# run as non root user
USER bun

# go to work folder
WORKDIR /usr/src/app

# copy from build image
COPY --chown=bun:bun --from=build /usr/src/app/server/generated ./generated
COPY --chown=bun:bun --from=build /usr/src/app/server/node_modules ./node_modules
COPY --chown=bun:bun --from=build /usr/src/app/server/src ./src
COPY --chown=bun:bun --from=build /usr/src/app/server/public ./public
COPY --chown=bun:bun --from=build /usr/src/app/server/package.json ./package.json

# Expose port
EXPOSE 3000

# run it !
CMD ["bun", "run", "start"]
