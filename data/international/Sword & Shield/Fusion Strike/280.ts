import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Secret Rare",
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
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Studio Bora Inc.",

	description: {
		'en-us': "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dynamotor",
			'fr-fr': "Dynamoteur",
			'de-de': "Dynamotor",
			'es-es': "Dinamotor",
			'pt-br': "Dinamotor",
			'it-it': "Dinamotore"
		},

		effect: {
			'en-us': "Once during your turn (before your attack), you may attach a {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie {L} de votre pile de défausse à 1 de vos Pokémon de Banc.",
			'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 {L}-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen.",
			'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir una carta de Energía {L} de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'pt-br': "Uma vez na sua vez de jogar (antes de atacar), você poderá ligar um card de Energia {L} da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia {L} dalla tua pila degli scarti."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'de-de': "Elektroball",
			'es-es': "Bola Voltio",
			'pt-br': "Bola Elétrica",
			'it-it': "Energisfera"
		},

		damage: 50
	}],

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 583041,
				tcgplayer: 253284
			}
		},
	],
}

export default card
