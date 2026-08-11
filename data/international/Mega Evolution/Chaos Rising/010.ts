import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies.",
	},

	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'es-es': "Ho-Oh",
		'es-mx': "Ho-Oh",
		'de-de': "Ho-Oh",
		'it-it': "Ho-Oh",
		'pt-br': "Ho-Oh"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flames of Revival",
			'fr-fr': "Flammes de Rappel",
			'es-es': "Llamas Revitalizantes",
			'es-mx': "Llamas Vitales",
			'de-de': "Flammen der Erneuerung",
			'it-it': "Fiamme della Vitalità",
			'pt-br': "Chamas do Reviver"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Put up to 3 Basic Pokémon from your discard pile onto your Bench.",
			'fr-fr': "Placez jusqu'à 3 Pokémon de base de votre pile de défausse sur votre Banc.",
			'es-es': "Pon hasta 3 Pokémon Básicos de tu pila de descartes en tu Banca.",
			'es-mx': "Pon hasta 3 Pokémon Básicos de tu pila de descartes en tu Banca.",
			'de-de': "Lege bis zu 3 Basis-Pokémon aus deinem Ablagestapel auf deine Bank.",
			'it-it': "Prendi fino a tre Pokémon Base dalla tua pila degli scarti e mettili nella tua panchina.",
			'pt-br': "Coloque até 3 Pokémon Básicos da sua pilha de descarte no seu Banco."
		}
	}, {
		name: {
			'en-us': "Bright Wing",
			'fr-fr': "Ailes Lumineuses",
			'es-es': "Ala Brillante",
			'es-mx': "Ala Brillante",
			'de-de': "Strahlenschwinge",
			'it-it': "Ala di Luce",
			'pt-br': "Asa Brilhante"
		},

		cost: ["Fire", "Fire", "Fire"],
		damage: 130,

		effect: {
			'en-us': "Discard a {R} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} de ce Pokémon.",
			'es-es': "Descarta 1 Energía {R} de este Pokémon.",
			'es-mx': "Descarta 1 Energía {R} de este Pokémon.",
			'de-de': "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia {R} da questo Pokémon.",
			'pt-br': "Descarte uma Energia {R} deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886402,
				tcgplayer: 693500
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 886402,
				tcgplayer: 693500
			}
		},
		{
			type: 'holo',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 886625
			}
		},
		{
			type: 'holo',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 888580
			}
		},
	],
}

export default card
