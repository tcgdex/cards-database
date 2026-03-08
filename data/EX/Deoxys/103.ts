import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Salamence ex",
		fr: "Drattak ex",
		de: "Brutalanda ex"
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
		en: "Shelgon",
		fr: "Drackhaus"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Lift",
				fr: "Élévation de dragon",
				de: "Dragon Lift"
			},
			effect: {
				en: "The Retreat Cost for each of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0.",
				fr: "Le Coût de retraite de chacun de vos Pokémon (Pokémon-ex et Bébé Pokémon exclus) est de 0.",
				de: "The Retreat Cost of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0."
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
				en: "Flame Jet",
				fr: "Jet de flamme",
				de: "Flame Jet"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance."
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
				en: "Bright Flame",
				fr: "Flamme éclatante",
				de: "Bright Flame"
			},
			effect: {
				en: "Discard 2 Energy attached to Salamence ex.",
				fr: "Défaussez 2 Énergies attachées à Drattak ex.",
				de: "Discard 2 Energy attached to Salamence ex."
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

	thirdParty: {
		tcgplayer: 88903,
		cardmarket: 276506
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
