import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピロスワイン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [221],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "フリーズ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンは攻撃できません。 （防御するポケモンのベンチングまたは進化は、この効果を終了します。）",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				'ja-jp': "ブリザード",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はあなた自身のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
