import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'de-de': "Golbat"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pulse Search",
				'fr-fr': "Recherche de pouls",
				'de-de': "Suchimpuls"
			},
			effect: {
				'en-us': "Look at your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It loves the blood of humans and Pokémon. It flies around at night in search of neck veins.",
		'fr-fr': "Il aime le sang des humains et des Pokémon. Il erre la nuit en quête d'un cou où planter ses crocs."
	},

	thirdParty: {
		cardmarket: 277679,
		tcgplayer: 85796
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
