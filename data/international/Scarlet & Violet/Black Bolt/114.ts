import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'de-de': "Zapplalek",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'es-es': "Eelektrik",
		'es-mx': "Eelektrik"
	},

	illustrator: "Kurata So",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'de-de': "Zapplardin",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'es-es': "Tynamo",
		'es-mx': "Tynamo"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dynamotor",
			'fr-fr': "Dynamoteur",
			'de-de': "Dynamotor",
			'it-it': "Dinamotore",
			'pt-br': "Dinamotor",
			'es-es': "Dinamotor",
			'es-mx': "Dinamotor"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a 1 de tus Pokémon en Banca."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'de-de': "Stromball",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'es-es': "Bola Eléctrica",
			'es-mx': "Bola Eléctrica"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836139,
				tcgplayer: 642567
			}
		},
	]
}

export default card
