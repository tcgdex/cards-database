import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Darkness Cube 01",
		fr: "Wattouat",
		de: "Voltilamm"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		179,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plunder",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Attach this card to 1 of your Darkness Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Darkness Cube 01.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87196,
				cardmarket: 274994
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
