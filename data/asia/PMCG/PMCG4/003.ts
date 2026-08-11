import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナゾノクサ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "スリープパウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575731
			},
		},
	],
};

export default card
