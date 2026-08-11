import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カスミのニョロボン",
	},
	illustrator: "Ken Sugimori",

	rarity: "Rare",
	category: "Pokemon",
	dexId: [62],
	hp: 90,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ウォーターリング",
			},
			effect: {
				'ja-jp': "各プレイヤーのベンチに水がない各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575355
			},
		},
	],
};

export default card
