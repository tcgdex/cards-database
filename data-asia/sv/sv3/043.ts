import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲピー"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "幸運の シンボル。 殻の 中には 幸せが たくさん つまっている という。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "あまえごえ"
		},

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ころがりタックル"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card