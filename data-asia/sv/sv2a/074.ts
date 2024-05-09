import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "イシツブテ"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [74],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "両手を 使い 険しい 崖を 登る。 その姿を 見た 人が ボルダリングを 始めたらしい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かたまる"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんこつ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card