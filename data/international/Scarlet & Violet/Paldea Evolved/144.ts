import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [944],
	set: Set,

	name: {
		'fr-fr': "Gribouraigne",
		'en-us': "Shroodle",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Recherche de Baies",
			'en-us': "Berry Search",
			'es-es': "Buscabayas",
			'it-it': "Cercabacche",
			'pt-br': "Busca de Fruta",
			'de-de': "Beerensuche"
		},

		effect: {
			'fr-fr': "Ajoutez une carte Énergie de base de votre pile de défausse à votre main.",
			'en-us': "Put a Basic Energy card from your discard pile into your hand.",
			'es-es': "Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Energia Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'fr-fr': "Griffe",
			'en-us': "Scratch",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715619,
				tcgplayer: 497659,
				cardtrader: 248782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715619,
				tcgplayer: 497659,
				cardtrader: 248782
			}
		},
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
	},
}

export default card
