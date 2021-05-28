import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},
	illustrator: "Kouji Tajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		337,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Premonition",
				fr: "Présage",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back on top of your deck in any order.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l'ordre de votre choix.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
