import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// abra
		ja: "ケーシィ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [63],
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "PsyShock",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575569
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 576996
			}
		}
	],
};

export default card
