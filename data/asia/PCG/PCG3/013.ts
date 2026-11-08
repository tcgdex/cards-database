import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗いゴルバット",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [42],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "夜の待ち伏せ",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンの1つに30ダメージを与えます。 Dark Golbatは次のターン中に攻撃できません。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
