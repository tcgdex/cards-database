import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit",
		de: "Letarking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		289,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy Paunch",
				fr: "Ventre paresseux",
				de: "Lazy Paunch"
			},
			effect: {
				en: "If Slaking used any attacks during your last turn, Slaking can't attack.",
				fr: "Si Monaflemit a utilisé des attaques lors de votre tour précédent, il ne peut pas attaquer.",
				de: "If Slaking used any attacks during your last turn, Slaking can't attack."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Best Dash",
				fr: "Meilleure ruée",
				de: "Best Dash"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Monaflemit par des attaques sont augmentés de 50 (après application de la Faiblesse et de la Résistance).",
				de: "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance)."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278437
	}
}

export default card
