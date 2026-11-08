import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのモンジャラ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "つる平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "ブドウをストレッチします",
			},
			effect: {
				'ja-jp': "対戦相手がベンチポケモンを持っている場合は、1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576794
			},
		},
	],
};

export default card
