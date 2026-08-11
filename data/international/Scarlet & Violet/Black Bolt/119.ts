import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [578],
	set: Set,

	name: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
		'de-de': "Mitodos",
		'it-it': "Duosion",
		'pt-br': "Duosion",
		'es-es': "Duosion",
		'es-mx': "Duosion"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'de-de': "Monozyto",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'es-es': "Solosis",
		'es-mx': "Solosis"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cellular Evolution",
			'fr-fr': "Évolution Cellulaire",
			'de-de': "Zellenentwicklung",
			'it-it': "Evoluzione Cellulare",
			'pt-br': "Evolução Celular",
			'es-es': "Evolución Celular",
			'es-mx': "Evolución Celular"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de uno de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de 1 de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Spray Fluid",
			'fr-fr': "Fluide Éclaboussant",
			'de-de': "Sprühwasser",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'es-es': "Fluido Rociado",
			'es-mx': "Rociar Líquido"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836151,
				tcgplayer: 642573
			}
		},
	]
}

export default card
