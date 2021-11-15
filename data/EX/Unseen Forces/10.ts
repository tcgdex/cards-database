import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Super Suction Cups",
				fr: "Super ventouses"
			},
			effect: {
				en: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.",
				fr: "Tant qu'Octillery est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas battre en retraite."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Standing By",
				fr: "État d'alerte"
			},
			effect: {
				en: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
				fr: "Défaussez une carte Énergie attachée à Octillery. Lors de votre prochain tour, les dégâts de base d'Explosion vibrante d'Octillery sont de 120."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
				fr: "Explosion vibrante"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
