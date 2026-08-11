import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Mothim",
		'de-de': "Moterpel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [414],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Burmy"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Cloak Party",
				'de-de': "Umhangteam"
			},
			effect: {
				'en-us': "Search your deck for up to 3 in any combination of Burmy and Wormadam, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Karten in beliebiger Kombination aus Burmy- und Burmadame-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'de-de': "Energieförderung"
			},
			effect: {
				'en-us': "Seach your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "While it loves floral honey, it won't gather any itself. Instead, it plots to steal some from Combee."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87583,
				cardmarket: 278878
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278878,
				tcgplayer: 87583
			}
		},
	],

	retreat: 0
}

export default card
