import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Salamence ex",
		fr: "Drattak ex"
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
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dragon Lift",
				fr: "Élévation de dragon"
			},
			effect: {
				en: "The Retreat Cost for each of your Pokémon (excluding Pokémon-ex and Baby Pokémon) is 0.",
				fr: "Le Coût de retraite de chacun de vos Pokémon (Pokémon-ex et Bébé Pokémon exclus) est de 0."
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
				fr: "Jet de flamme"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
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
				fr: "Flamme éclatante"
			},
			effect: {
				en: "Discard 2 Energy attached to Salamence ex.",
				fr: "Défaussez 2 Énergies attachées à Drattak ex."
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




}

export default card
