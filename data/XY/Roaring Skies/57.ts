import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Shatter",
				fr: "Fracas",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Howl",
				fr: "Hurlement Puissant",
			},
			effect: {
				en: "This attack does 20 damage times the number of cards in your opponent's hand.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
				fr: "Geyser de Vapeur",
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
