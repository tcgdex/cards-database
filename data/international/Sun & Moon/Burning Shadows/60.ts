import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Allure",
				'fr-fr': "Allure",
				'es-es': "Atractivo",
				'it-it': "Affascinante",
				'pt-br': "Fascinar",
				'de-de': "Verlockung"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
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
				'fr-fr': "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
				'es-es': "Este ataque hace 10 puntos de daño por cada carta en tu mano.",
				'it-it': "Questo attacco infligge 10 danni per ogni carta nella tua mano.",
				'pt-br': "Este ataque causa 10 pontos de dano para cada carta na sua mão.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When in danger, it raises its ears and releases enough psychic power to grind a 10-ton truck to dust.",
	},

	thirdParty: {
		cardmarket: 299464,
		tcgplayer: 138542
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
