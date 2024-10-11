import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマケロ"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [287],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "のんびりする"
		},

		effect: {
			ja: "このポケモンのHPを「60」回復する。次の自分の番、このポケモンはにげられない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card