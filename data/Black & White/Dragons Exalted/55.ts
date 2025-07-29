import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gothita",
		fr: "Scrutella",
		es: "Gothita",
		it: "Gothita",
		pt: "Gothita",
		de: "Mollimorba"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		574,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
			},
			effect: {
				en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				fr: "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280494
	}
}

export default card
