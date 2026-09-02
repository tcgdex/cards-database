import { existsSync } from "fs";
import pathLib from "path";

const dirExistsCache = new Map<string, boolean>()

/** cached check for whether a directory exists as we are doing a check to see if both a file and its directory exist
 * a glob scan is more expensive than a directory check so we cache the result of the directory check to avoid doing it
 * multiple times for the same directory. this isn't really needed its more of a safety check on the compiler to make it
 * clear to users that a single file and folder can't be used together
 * */
export function directoryExists(relativePath: string): boolean {
	if (!dirExistsCache.has(relativePath)) {
		dirExistsCache.set(relativePath, existsSync(pathLib.resolve(__dirname, relativePath)))
	}
	return dirExistsCache.get(relativePath)!
}
