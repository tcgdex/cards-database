import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
		de: "Octillery"
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
		fr: "Rémoraid"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Super Suction Cups",
				fr: "Super ventouses",
				de: "Super Suction Cups"
			},
			effect: {
				en: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.",
				fr: "Tant qu'Octillery est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas battre en retraite.",
				de: "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat"
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
				fr: "État d'alerte",
				de: "Standing By"
			},
			effect: {
				en: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
				fr: "Défaussez une carte Énergie attachée à Octillery. Lors de votre prochain tour, les dégâts de base d'Explosion vibrante d'Octillery sont de 120.",
				de: "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
				fr: "Explosion vibrante",
				de: "Pulse Blast"
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276656,
		tcgplayer: 87831
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
