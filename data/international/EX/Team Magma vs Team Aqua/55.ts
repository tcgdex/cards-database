import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Poochyena",
		'fr-fr': "Medhyena de Team Aqua",
		'de-de': "Team Aquas Fiffyen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [261],

	hp: 50,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'de-de': "Roar"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Crush",
				'fr-fr': "Écrasement Aqua",
				'de-de': "Aqua Crush"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 10,

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
				cardmarket: 275832,
				tcgplayer: 89795
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275832,
				tcgplayer: 89795
			}
		},
	],

}

export default card
