import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	illustrator: "OKACHEKE",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dynamotor",
			'fr-fr': "Dynamoteur",
			'es-es': "Dinamotor",
			'it-it': "Dinamotore",
			'pt-br': "Dynamotor",
			'de-de': "Dynamotor"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
			'pt-br': "Once during your turn, you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Lightning-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Electro Ball",
			'de-de': "Elektroball"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	description: {
		'en-us': "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	dexId: [180],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574079,
				tcgplayer: 246897
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574079,
				tcgplayer: 246897
			}
		},
	],
}

export default card
