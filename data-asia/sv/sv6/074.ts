import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "コドラ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "takashi shiraishi",
	dexId: [305],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コドラが 暮らす 山は 湧き水と 鉄鉱石が 豊富なので 人と 争いに なることも 多かった。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "こうてつタックル"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "メタルクロー"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card
