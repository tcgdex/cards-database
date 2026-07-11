import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// machop
		ja: "ワンリキー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "ローキック",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575581
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577008
			}
		}
	],
};

export default card
