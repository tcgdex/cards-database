import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
	},

	illustrator: "Midori Harada",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sonic Vision",
				'fr-fr': "Vision Sonique",
			},
			effect: {
				'en-us': "If you have exactly 4 cards in your hand, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
				'fr-fr': "Si vous avez exactement 4 cartes dans votre main, ignorez toutes les Énergies dans le coût d'attaque de chacune des attaques de ce Pokémon.",
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
				'en-us': "Assault Boom",
				'fr-fr': "Dégât d'Assaut",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
	},

	thirdParty: {
		cardmarket: 554133
	}
}

export default card
