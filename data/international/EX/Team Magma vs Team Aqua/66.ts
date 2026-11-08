import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Poochyena",
		'fr-fr': "Medhyena de Team Magma",
		'de-de': "Team Magmas Fiffyen"
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
				'en-us': "Darkness Call",
				'fr-fr': "Demande d'Obscurité",
				'de-de': "Darkness Call"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of this or her Benched Pokémon, if any."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc aiguisé",
				'de-de': "Sharp Fang"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
				cardmarket: 275843,
				tcgplayer: 89839
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275843,
				tcgplayer: 89839
			}
		},
	],

}

export default card
