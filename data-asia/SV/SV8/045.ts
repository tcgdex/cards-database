import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲピー"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "殻の中に 幸せが たくさん つまっているらしく 優しくされると 幸運を 分け与える という。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はたく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card