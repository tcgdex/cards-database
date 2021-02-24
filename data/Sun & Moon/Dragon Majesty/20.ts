import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Commotion",
				fr: "Commotion",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on each of your Benched Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur chacun de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Wild Tail",
				fr: "Queue Déchaînée",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser toute carte Stade en jeu.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
