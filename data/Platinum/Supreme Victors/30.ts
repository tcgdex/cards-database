import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Lickilicky C",
		fr: "Coudlangue ",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		463,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Licking-Licking Heal",
				fr: "Coudlangue guérisseur",
			},
			effect: {
				en: "Attach a basic Energy card from your hand to 1 of your Pokémon. Then, remove 2 damage counters from that Pokémon.",
				fr: "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon. Ensuite, retirez à ce Pokémon 2 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
