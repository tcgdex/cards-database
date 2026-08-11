import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コラッタ",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 30,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575591
			}
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577018
			}
		}
	],
};

export default card
