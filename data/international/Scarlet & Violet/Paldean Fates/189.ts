import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [944],
	set: Set,

	name: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Berry Search",
			'fr-fr': "Recherche de Baies",
			'es-es': "Buscabayas",
			'it-it': "Cercabacche",
			'pt-br': "Busca de Fruta",
			'de-de': "Beerensuche"
		},

		effect: {
			'en-us': "Put a Basic Energy card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751728,
				tcgplayer: 535143,
				cardtrader: 274374
			}
		},
	],

	illustrator: "otumami",

	description: {
		'en-us': "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
	},

}

export default card
