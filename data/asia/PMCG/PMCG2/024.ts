import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: {
				'ja-jp': "スパーク",
			},
			effect: {
				'ja-jp': "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576638
			},
		},
	],
};

export default card
