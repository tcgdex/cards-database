import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ"
	},

	illustrator: "Makura Tami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [184],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じゃれつく"
		},

		damage: "30＋",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "パワータックル"
		},

		damage: 140,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card