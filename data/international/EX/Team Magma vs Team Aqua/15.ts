import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Mightyena",
		'fr-fr': "Grahyena de Team Aqua",
		'de-de': "Team Aquas Magnayen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 70,

	types: [
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mystic Fang",
				'fr-fr': "Croc mystique",
				'de-de': "Mystic Fang"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Confus.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Confused."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275792,
				tcgplayer: 89792
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275792,
				tcgplayer: 89792
			}
		},
	],

}

export default card
