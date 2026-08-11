import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Unown K",
		'fr-fr': "Zarbi K",
		'de-de': "Icognito K"
	},
	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "KIND",
				'fr-fr': "KATÉGORIE",
				'de-de': "KIND"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 2 damage counters from 1 of the Defending Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez retirer 2 marqueurs de dégât à 1 des Pokémon Défenseurs.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 2 Schadensmarken von 1 Verteidigenden Pokémon entfernen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Shaped like ancient writing, it is a huge mystery whether language or UNOWN came first.",
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
