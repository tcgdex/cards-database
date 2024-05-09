import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ピクシー"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "satoma",
	dexId: [36],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "耳が 良くて １キロ 離れた ところで 落とした 針の音を 見事に 聞き分けられる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ゆびをふる"
		},

		effect: {
			ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルショット"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card
