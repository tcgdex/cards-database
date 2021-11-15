import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Charizard ex",
		fr: "Dracaufeu ex"
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
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Flame",
				fr: "Flamme d'Énergie"
			},
			effect: {
				en: "All Energy attached to Charizard ex are Fire Energy instead of its usual type.",
				fr: "Toutes les Énergies attachées à Dracaufeu ex sont des Énergies ."
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
				fr: "Tranche"
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
				fr: "Réduire en cendres"
			},
			effect: {
				en: "Discard 5 Fire Energy attached to Charizard ex. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, and any other effects on the Defending Pokémon.",
				fr: "Défaussez 5 Énergies  attachées à Dracaufeu ex. Les dégâts de cette attaque ne sont pas affectés la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur."
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





}

export default card
