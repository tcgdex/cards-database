import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rev",
			'fr-fr': "Coup d'Accélération",
			'es-es': "Acelerón",
			'it-it': "Su di Giri",
			'pt-br': "Pisar Fundo",
			'de-de': "Hochdrehen"
		},

		effect: {
			'en-us': "Put up to 2 Basic Energy cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751602,
				tcgplayer: 534426,
				cardtrader: 274248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751602,
				tcgplayer: 534426,
				cardtrader: 274248
			}
		},
	],

	illustrator: "Tetsu Kayama",

	description: {
		'en-us': "It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",
	},

}

export default card
