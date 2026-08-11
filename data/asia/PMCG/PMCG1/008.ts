import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フシギソウ",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "つる鞭",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "相手のアクティブなポケモンは毒されています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575642
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577069
			},
		}
	],
};

export default card
