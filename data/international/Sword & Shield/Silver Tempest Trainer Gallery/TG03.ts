import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [180],
	set: Set,

	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	illustrator: "saino misaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dynamotor",
			'fr-fr': "Dynamoteur",
			'es-es': "Dinamotor",
			'it-it': "Dinamotore",
			'pt-br': "Dinamotor",
			'de-de': "Dynamotor"
		},

		effect: {
			'en-us': "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre pile de défausse à 1 de vos Pokémon de Banc.",
			'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir una carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
			'pt-br': "Uma vez na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Lightning-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682267,
				tcgplayer: 452017
			}
		},
	],
}

export default card
