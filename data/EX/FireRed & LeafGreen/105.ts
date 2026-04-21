import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Charizard ex",
		fr: "Dracaufeu ex",
		de: "Glurak ex"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Flame",
				fr: "Flamme d'Énergie",
				de: "Energy Flame"
			},
			effect: {
				en: "All Energy attached to Charizard ex are Fire Energy instead of its usual type.",
				fr: "Toutes les Énergies attachées à Dracaufeu ex sont des Énergies .",
				de: "All Energy attached to Charizard ex are  Energy instead of its usual type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Burn Down",
				fr: "Réduire en cendres",
				de: "Burn Down"
			},
			effect: {
				en: "Discard 5 Fire Energy attached to Charizard ex. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, and any other effects on the Defending Pokémon.",
				fr: "Défaussez 5 Énergies  attachées à Dracaufeu ex. Les dégâts de cette attaque ne sont pas affectés la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Discard 5  Energy attached to Charizard ex. This attack's\ndamage isn't affected by Weakness, Resistance,\nPoké-Powers, Poké-Bodies, and any other effects on the\nDefending Pokémon."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276281,
		tcgplayer: 84199
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
