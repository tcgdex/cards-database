import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],

	hp: 50,

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
				'en-us': "Sneaky Placement",
				'fr-fr': "Placement vicieux",
				'de-de': "Heimlichtuerei"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur l’un des Pokémon de votre adversaire.",
				'de-de': "Lege 1 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85656,
				cardmarket: 279593
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279593,
				tcgplayer: 85656
			}
		},
	],

}

export default card
