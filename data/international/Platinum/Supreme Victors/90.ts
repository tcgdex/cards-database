import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'de-de': "Tanhel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [374],

	hp: 50,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pit Search",
				'fr-fr': "Recherche dans la fosse",
				'de-de': "Grubensuche"
			},
			effect: {
				'en-us': "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It converses with others by using magnetic pulses. In a swarm, they move in perfect unison."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83790,
				cardmarket: 278781
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278781,
				tcgplayer: 83790
			}
		},
	],

}

export default card
