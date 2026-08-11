import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [931],
	set: Set,

	name: {
		'fr-fr': "Tapatoès-ex",
		'en-us': "Squawkabilly ex",
		'es-es': "Squawkabilly ex",
		'it-it': "Squawkabilly-ex",
		'pt-br': "Squawkabilly ex",
		'de-de': "Krawalloro-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Tapage et Prise",
			'en-us': "Squawk and Seize",
			'es-es': "Graznido y Captura",
			'it-it': "Strilla e Afferra",
			'pt-br': "Grasnar e Aproveitar",
			'de-de': "Krawallkrallen"
		},

		effect: {
			'fr-fr': "Une fois pendant votre premier tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez utiliser qu'un talent Tapage et Prise pendant votre tour.",
			'en-us': "Once during your first turn, you may discard your hand and draw 6 cards. You can't use more than 1 Squawk and Seize Ability during your turn.",
			'es-es': "Una vez durante tu primer turno, puedes descartar las cartas de tu mano y robar 6 cartas. No puedes usar más de una habilidad Graznido y Captura durante tu turno.",
			'it-it': "Una sola volta durante il tuo primo turno, puoi scartare le carte che hai in mano e pescare sei carte. Non puoi usare più di un'abilità Strilla e Afferra durante il tuo turno.",
			'pt-br': "Uma vez durante o seu primeiro turno, você poderá descartar a sua mão e comprar 6 cartas. Você não pode usar mais de 1 Habilidade Grasnar e Aproveitar durante o seu turno.",
			'de-de': "Einmal während deines ersten Zuges kannst du deine Handkarten auf deinen Ablagestapel legen und 6 Karten ziehen. Du kannst die Fähigkeit Krawallkrallen nur einmal während deines Zuges einsetzen."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Motivation",
			'en-us': "Motivate",
			'es-es': "Motivar",
			'it-it': "Incentivo",
			'pt-br': "Motivação",
			'de-de': "Motivieren"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'en-us': "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715722,
				tcgplayer: 497658,
				cardtrader: 248909
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
