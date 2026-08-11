import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libegon",
		'de-de': "Libelldra"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [330],

	hp: 100,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Guard",
				'fr-fr': "Défense de sable",
				'de-de': "Sandwache"
			},
			effect: {
				'en-us': "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.",
				'fr-fr': "Lorsqu'une attaque de votre adversaire inflige des dégâts à Libegon (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, les dégâts sont réduits de 20.",
				'de-de': "Immer wenn Libelldra durch einen generischen Angriff Schaden zugefügt würde (nachdem Schwäche und Resistenz verrechnet wurden), wirf 1 Münze. Bei 'Kopf' wird der Schaden um 20 Schadenspunkte reduziert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Tranch'air",
				'de-de': "Luftschlitzer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy card attached to Flygon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à Libegon.",
				'de-de': "Wirf 1 Münze. Entferne bei 'Zahl' 1 Energiekarte von Libelldra."
			},
			damage: 60,

		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85522,
				cardmarket: 280583
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85522,
				cardmarket: 280583
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 240132,
				cardmarket: 280583
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 240133,
				cardmarket: 280583
			},
		},
	],

}

export default card
