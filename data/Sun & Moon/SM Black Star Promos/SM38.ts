import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Incineroar-GX",
		fr: "Félinferno-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 250,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hustling Strike",
				fr: "Frappe Bousculante",
			},
			effect: {
				en: "This attack does 20 more damage for each of your Benched Fire Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc Fire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Tiger Swing",
				fr: "Projection de Tigre",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Slam-GX",
				fr: "Percussion Brûlante-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
