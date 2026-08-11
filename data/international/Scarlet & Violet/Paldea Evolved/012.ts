import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		'fr-fr': "Poussacha",
		'en-us': "Sprigatito",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'de-de': "Felori"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Collecte Solaire",
			'en-us': "Gather Sunlight",
			'es-es': "Síntesis Solar",
			'it-it': "Radunasole",
			'pt-br': "Banho de Sol",
			'de-de': "Sonnenlicht sammeln"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Canon Graine",
			'en-us': "Seed Bomb",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715484,
				tcgplayer: 497423,
				cardtrader: 248308
			}
		},
		{
			type: 'normal',
			stamp: ['horizons'],
			thirdParty: {
				cardmarket: 794945
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715484,
				tcgplayer: 497423,
				cardtrader: 248308
			}
		},
	],

	illustrator: "Megumi Mizutani",

	description: {
		'en-us': "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
	},
}

export default card
