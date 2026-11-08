import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ストライク",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [123],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "剣の踊り",
			},
			effect: {
				'ja-jp': "次のターン中、このポケモンのスラッシュ攻撃は30回以上のダメージを与えます（脱力感と抵抗を適用する前）。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラッシュ",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 576645
			},
		},
	],
};

export default card
