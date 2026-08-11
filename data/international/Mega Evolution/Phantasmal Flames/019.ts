import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'es-mx': "Charcadet",
		'de-de': "Knarbon",
		'it-it': "Charcadet",
		'pt-br': "Charcadet"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [935],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Gather Strength",
			'fr-fr': "Pouvoir Collecté",
			'es-es': "Reunir Fuerzas",
			'es-mx': "Reunir Fuerzas",
			'de-de': "Kraftsammler",
			'it-it': "Radunaforze",
			'pt-br': "Reunir Força"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'es-mx': "Golpe Tajante",
			'de-de': "Hacker",
			'it-it': "Ceffone",
			'pt-br': "Trincar"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	illustrator: "Tomokazu Komiya",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857594,
				tcgplayer: 662142,
				cardtrader: 356802
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857594,
				tcgplayer: 662142,
				cardtrader: 356802
			}
		},
	],
}

export default card
