import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Salamence ex",
		'fr-fr': "Drattak ex",
		'de-de': "Brutalanda ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Lift",
				'fr-fr': "Élévation de dragon",
				'de-de': "Dragon Lift"
			},
			effect: {
				'en-us': "The Retreat Cost for each of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0.",
				'fr-fr': "Le Coût de retraite de chacun de vos Pokémon (Pokémon-ex et Bébé Pokémon exclus) est de 0.",
				'de-de': "The Retreat Cost of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Jet",
				'fr-fr': "Jet de flamme",
				'de-de': "Flame Jet"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bright Flame",
				'fr-fr': "Flamme éclatante",
				'de-de': "Bright Flame"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Salamence ex.",
				'fr-fr': "Défaussez 2 Énergies attachées à Drattak ex.",
				'de-de': "Discard 2 Energy attached to Salamence ex."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88903,
				cardmarket: 276506
			},
		},
	],

}

export default card
