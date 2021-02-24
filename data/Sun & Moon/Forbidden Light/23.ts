import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
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
		en: "Froakie",
		fr: "Grenousse",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gale Shuriken",
				fr: "Bourrasque Shuriken",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
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



}

export default card
