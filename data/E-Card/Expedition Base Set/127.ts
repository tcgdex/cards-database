import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lightning Cube 01",
		fr: "Qwilfish",
		de: "Baldorfish"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		211,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Discharge",
				fr: "Dard etourdissant",
				de: "Betäubungsnadel"
			},
			effect: {
				en: "Attach this card to 1 of your Lightning Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Lightning Cube 01.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88491,
				cardmarket: 275002
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
