import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'es-mx': "Togedemaru",
		'de-de': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [777],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'es-mx': "Encontrar un Amigo",
			'de-de': "Freunde finden",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo"
		},

		effect: {
			'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 Pokémon, muéstralo y ponlo en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por um Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Metal"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'es-mx': "Mordisquear",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída"
		},

		damage: 30
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
	regulationMark: "I",

	description: {
		'en-us': "When it's in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately.",
	},

	illustrator: "Bun Toujo",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857648,
				tcgplayer: 662232,
				cardtrader: 356859
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857648,
				tcgplayer: 662232,
				cardtrader: 356859
			}
		},
	],
}

export default card
