import AbilityType from "./AbilityType";
import LangList from "./LangList";
import { promises } from "fs";

interface Ability {
	id?: number
	type: AbilityType
	name: LangList<string>
	text: LangList<string>
}

const file = "./generated/abilities.json"

let abilities: Array<string> = []

namespace Ability {
	export async function fetch(): Promise<void> {
		const els = await promises.readFile(file)
		abilities = JSON.parse(els.toString())
	}

	export function process(str: string): number | undefined {
		return abilities.indexOf(str)
	}

	export async function save(): Promise<void> {
		return promises.writeFile(file, JSON.stringify(abilities))
	}
}

export default Ability
