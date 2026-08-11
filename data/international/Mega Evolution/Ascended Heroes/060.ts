import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'es-mx': "Eelektrik",
		'de-de': "Zapplalek",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik"
	},

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'es-mx': "Tynamo",
		'de-de': "Zapplardin",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [603],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dynamotor",
			'fr-fr': "Dynamoteur",
			'es-es': "Dinamotor",
			'es-mx': "Dinamotor",
			'de-de': "Dynamotor",
			'it-it': "Dinamotore",
			'pt-br': "Dinamotor"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'es-mx': "Una vez durante tu turno, puedes unir 1 carta de Energía {L} Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Electric Ball",
			'fr-fr': "Boule de Foudre",
			'es-es': "Bola Eléctrica",
			'es-mx': "Bola Eléctrica",
			'de-de': "Stromball",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade"
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
	regulationMark: "I",

	description: {
		'en-us': "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869671,
			tcgplayer: 675872
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870232,
			tcgplayer: 676900
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870231,
			tcgplayer: 677040
		}
	},
],
}

export default card
