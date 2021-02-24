import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "White Kyurem-GX",
		fr: "Kyurem Blanc-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		646,
	],
	hp: 190,
	types: [
		"Dragon",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Raging Blade",
				fr: "Lame en Furie",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Nova-GX",
				fr: "Nova Dragon-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned and Paralyzed. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
