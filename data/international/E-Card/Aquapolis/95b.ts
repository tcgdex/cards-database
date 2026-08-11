import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Mr. Mime",
		'fr-fr': "M.Mime",
		'de-de': "Pantimos"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [122],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [{
		name: {
			'fr-fr': "Barrière d'énergie",
			'de-de': "Energiebarriere"
		},

		effect: {
			'fr-fr': "Si M. Mime devait subir les dégâts d'une attaque, réduisez ces dégâts de 10 pour chaque carte Énergie de base attachée à M. Mime. La quantité maximum de dégâts pouvant être réduits par la Barrière d'énergie est 20.",
			'de-de': "Wenn Pantimos durch einen Angriff Schaden zugefügt würde, reduziere diesen Schaden für jede an Pantimos angelegte Basis-Energiekarte um 10. Die höchste Anzahl an Schaden, die durch die Energiebarriere verhindert werden kann, beträgt 20."
		},

		type: "Poke-BODY"
	}],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc mémoriel",
				'de-de': "Verstandesschock"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance.",
				'fr-fr': "N'appliquez ni la Faiblesse, ni la Résistance.",
				'de-de': "Wende Schwäche und Resistenz nicht an."
			},
			damage: 20,

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 87591,
				cardmarket: 275169
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87591,
				cardmarket: 275169
			}
		},
	]
}

export default card
