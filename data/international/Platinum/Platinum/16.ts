import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflemit",
		'de-de': "Letarking"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [289],

	hp: 150,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lazy Paunch",
				'fr-fr': "Ventre paresseux",
				'de-de': "Lazy Paunch"
			},
			effect: {
				'en-us': "If Slaking used any attacks during your last turn, Slaking can't attack.",
				'fr-fr': "Si Monaflemit a utilisé des attaques lors de votre tour précédent, il ne peut pas attaquer.",
				'de-de': "If Slaking used any attacks during your last turn, Slaking can't attack."
			}
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
				'en-us': "Best Dash",
				'fr-fr': "Meilleure ruée",
				'de-de': "Best Dash"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Monaflemit par des attaques sont augmentés de 50 (après application de la Faiblesse et de la Résistance).",
				'de-de': "During your opponent's next turn, any damage done to Slaking by attacks is increased by 50 (after applying Weakness and Resistance)."
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

	description: {
		'en-us': "The world's laziest Pokémon. When it is lounging, it is actually saving energy for striking back."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89292,
				cardmarket: 278437
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278437,
				tcgplayer: 89292
			}
		}
	],

}

export default card
