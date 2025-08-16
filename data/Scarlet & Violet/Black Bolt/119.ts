import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [578],
	set: Set,

	name: {
		en: "Duosion",
		fr: "Méios",
		de: "Mitodos",
		it: "Duosion",
		pt: "Duosion",
		es: "Duosion",
		'es-mx': "Duosion"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Cellular Evolution",
			fr: "Évolution Cellulaire",
			de: "Zellenentwicklung",
			it: "Evoluzione Cellulare",
			pt: "Evolução Celular",
			es: "Evolución Celular",
			'es-mx': "Evolución Celular"
		},

		effect: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja 1 carta que evolucione de uno de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta que evolucione de 1 de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			de: "Sprühwasser",
			it: "Fluidospray",
			pt: "Fluido Spray",
			es: "Fluido Rociado",
			'es-mx': "Rociar Líquido"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835983
	}
}

export default card