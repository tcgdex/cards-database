import { runCommand } from "../libs/osUtils"

export async function getLastEdit(path: string): Promise<string> {
	return runCommand(`git log -1 --pretty="format:%cd" --date=iso-strict "${path}"`, false)
}
