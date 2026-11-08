import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Omanyte",
		'de-de': "Amonitas"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [138],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Water of Evolution",
				'de-de': "Wasser der Evolution"
			},
			effect: {
				'en-us': "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.",
				'de-de': "Lege ein Amoroso aus deiner Hand auf Amonitas. Dies zählt als Entwickeln von Amonitas."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
				'de-de': "Bevor Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners wählen und es mit dem verteidigenden Pokémon austauschen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87853,
				cardmarket: 275299
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87853,
				cardmarket: 275299
			},
		},
	],
}

export default card
