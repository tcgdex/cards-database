import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "バウッツェル"
	},

	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [927],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体から 放つ 良い香りが 小麦の 成長を 助けるため 農村で 大切にされてきた。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんがりボディ"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けず、やけどにならない。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とびだしヘッド"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card