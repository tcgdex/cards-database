import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Fouinette",
		de: "Wiesor"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		161,
	],
	hp: 60,
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
				en: "Grope",
				fr: "À l'aveuglette",
				de: "Herumtasten"
			},
			effect: {
				en: "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
				fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck.",
				de: "Schau dir die obersten 2 Karten deines Decks an. Wähle 1 von ihnen und nimm sie auf die Hand. Lege die andere Karte unter dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
