import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲチック"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ドレインキッス"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card