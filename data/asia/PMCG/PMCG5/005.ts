import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのマダツボミ",
	},
	illustrator: "Ken Sugimori",

	rarity: "Common",
	category: "Pokemon",
	dexId: [69],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "不注意なタックル",
			},
			effect: {
				'ja-jp': "エリカのベルスプラウトは、それ自体に10ダメージを与えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576777
			},
		},
	],
};

export default card
