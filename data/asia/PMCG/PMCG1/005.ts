import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドラン♂",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [32],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "ホーンハザード",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575584
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577011
			},
		}
	],
};

export default card
