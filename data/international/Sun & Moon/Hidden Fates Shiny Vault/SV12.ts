import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		657,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gale Shuriken",
				'fr-fr': "Bourrasque Shuriken",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Drip",
				'fr-fr': "Goutte à Goutte",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute's time.",
	},
}

export default card
