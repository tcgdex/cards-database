import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Professor Oak's Research",
		fr: "Recherches du professeur Chen",
		de: "Professor Eichs Nachforschunge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck, then draw 5 cards.",
			},
		},
	],,
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Psychic",
				"Fire",
			],
			name: {
				en: "Psychic",
			},
			effect: {
				en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
			},
			damage: "10×",
		},
		{
			cost: [
				"Water",
				"Water",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
			},
			effect: {
				en: "Discard an Energy card attached to Lugia.",
			},
			damage: 50,
		},
	],,
	stage: "Basic",
	types: [
		"Colorless"
	],
	hp: 80,
	dexId: [249],
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck, then draw 5 cards.",
		fr: "Mélangez votre main à votre deck. Piochez ensuite 5 cartes.",
		de: "Mische deine Hand in dein Deck, und ziehe dann 5 Karten.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88402,
				cardmarket: 275024
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88402,
				cardmarket: 275024
			},
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	],
	retreat: 3,
}

export default card
