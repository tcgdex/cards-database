import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Headache",
				'fr-fr': "Migraine",
				'de-de': "Kopfweh"
			},
			effect: {
				'en-us': "Your opponent can't play Trainer cards during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Dresseur durant son prochain tour.",
				'de-de': "Dein gegner kann während seines nächsten Zuges keine Trainerkarte spielen."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf drei Münzen. Dieser Angriff fügt jedesmal wenn die Münze 'Kopf' zeigt 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.",
		'fr-fr': "Il distrait ses ennemis avec des grimaces débiles et les attaque ensuite avec ses pouvoirs psy."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273914,
				tcgplayer: 44455
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273914,
				tcgplayer: 44455
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
