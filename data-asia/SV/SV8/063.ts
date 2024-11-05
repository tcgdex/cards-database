import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "ぶ厚く 力強い 筋肉と 気性の 荒さが 特徴。 コンバット種と 呼ばれる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "けとばす"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ブロックスタンプ"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card