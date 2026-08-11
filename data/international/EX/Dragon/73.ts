import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [325],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Faire des bonds",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "After your attack, you may switch Spoink with 1 of your Benched Pokémon.",
				'fr-fr': "Après votre attaque, vous pouvez échanger Spoink avec un des Pokémon de votre Banc.",
				'de-de': "Nach deinem Angriff kannst du Spoink gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

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
			type: "normal",
			thirdParty: {
				tcgplayer: 89470,
				cardmarket: 275950
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89470,
				cardmarket: 275950
			},
		},
	],

}

export default card
