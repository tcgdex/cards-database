import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'en-us': "Indeedee",
		'fr-fr': "Wimessir",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Hand Kinesis",
			'fr-fr': "Télékinésie en Main",
			'es-es': "Manoquinesis",
			'it-it': "Manocinèsi",
			'pt-br': "Cinese de Mão",
			'de-de': "Handkinese"
		},

		effect: {
			'en-us': "This attack does 10 damage for each card in your hand.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
			'es-es': "Este ataque hace 10 puntos de daño por cada carta en tu mano.",
			'it-it': "Questo attacco infligge 10 danni per ogni carta nella tua mano.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada carta na sua mão.",
			'de-de': "Diese Attacke fügt für jede Karte auf deiner Hand 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545776,
				tcgplayer: 234164
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545776,
				tcgplayer: 234164
			}
		},
	],
}

export default card
