import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		784,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Shout of Power",
				fr: "Cri de Puissance",
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Fightning",
			],
			name: {
				en: "Scaly Uppercut",
				fr: "Uppercut Écaillé",
			},
			effect: {
				en: "You may discard a Pokémon Tool card from this Pokémon. If you do, this attack does 90 more damage.",
				fr: "Vous pouvez défausser une carte Outil Pokémon de ce Pokémon. Dans ce cas, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
