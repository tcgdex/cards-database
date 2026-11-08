import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [178],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Natu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Synchronicity",
				'de-de': "Synchronizität"
			},
			effect: {
				'en-us': "You may attach any Technical Machine to Xatu.",
				'de-de': "Du kannst beliebige technische Maschinen an Xatu anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Warp Hole",
				'de-de': "Verkrümmungsloch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" eine Karte aus deinem Ablagestapel und lege sie oben auf dein Deck."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 90658,
				cardmarket: 275293
			},
		},
	],
}

export default card
