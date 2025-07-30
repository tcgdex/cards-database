import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Finizen",
		fr: "Dofin",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Valiant Evolution",
			fr: "Évolution Vaillante",
			es: "Evolución Valiente",
			it: "Evoluzione Coraggiosa",
			pt: "Evolução Destemida",
			de: "Heldenhafte Entwicklung"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, procure por uma carta no seu baralho que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			pt: "Barbatana Cortante",
			de: "Rasierflosse"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "kurumitsu",

	thirdParty: {
		cardmarket: 751662
	}
}

export default card