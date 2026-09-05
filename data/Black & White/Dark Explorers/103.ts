import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Entei-EX",
		fr: "Entei-EX",
		es: "Entei-EX",
		it: "Entei-EX",
		pt: "Entei-EX",
		de: "Entei-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
				de: "Feuerzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale",
				de: "Gewaltige Flamme"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie  de votre pile de défausse à 1 de vos Pokémon de Banc.",
				de: "Lege 1 {R}-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
