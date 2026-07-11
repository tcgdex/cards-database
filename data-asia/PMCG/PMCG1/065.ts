import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// dratini
		ja: "ミニリュウ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [147],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Ken Sugimori",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ポンド",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575637
			}
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577064
			},
		}
	],
};

export default card
