import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
		de: "Golbat"
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
		en: "Zubat",
		fr: "Nosferapti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pulse Search",
				fr: "Recherche de pouls",
				de: "Suchimpuls"
			},
			effect: {
				en: "Look at your opponent's hand.",
				fr: "Regardez la main de votre adversaire.",
				de: "Schau dir die Handkarten deines Gegners an."
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
		fr: "Il aime le sang des humains et des Pokémon. Il erre la nuit en quête d'un cou où planter ses crocs."
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
