import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Drifloon",
		de: "Driftlon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [425],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Blowing Wind",
				fr: "Vent violent",
				de: "Windböe"
			},
			effect: {
				en: "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to it on top of your deck. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, placez 1 de vos Pokémon de Banc et toutes les cartes qui lui sont attachées au dessus de votre deck. Ensuite, mélangez votre deck.",
				de: "Wirf 1 Münze. Bei „Kopf“ lege 1 der Pokémon auf deiner Bank und alle an es angelegten Karten auf dein Deck. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ominous Wind",
				fr: "Vent Mauvais",
				de: "Unheilböen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	description: {
		en: "A Pokémon formed by the spirits of people and Pokémon. It loves damp, humid seasons.",
		de: "Ein PKMN, entstanden aus den Gefühlen von Menschen und PKMN. Es mag feuchte Jahreszeiten."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84954,
				cardmarket: 277891
			},
		},
	],

}

export default card
