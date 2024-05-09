import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ミルタンク"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [241],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "毎日 ミルクを 搾らないと 具合が 悪くなる。 ミルクの 味は 季節によって 変わるぞ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はつらつタックル"
		},

		damage: "60＋",

		effect: {
			ja: "この番、このポケモンのHPを回復していたなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card