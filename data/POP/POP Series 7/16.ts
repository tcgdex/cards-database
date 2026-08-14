import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Sentret",
		de: "Wiesor"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [161],

	hp: 60,

	types: [
		"Colorless"
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
	description: {
		en: "It has a very nervous nature. It stands up high on its tail so it can scan wide areas.",
		de: "Ein sehr nervöses PKMN. Es steht auf seinem Schweif und betrachtet seine Umgebung ganz genau."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89067,
				cardmarket: 278048
			},
		},
	],

}

export default card
