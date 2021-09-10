import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Glaceon V",
		fr: "Givrali V",
		es: "Glaceon V",
		it: "Glaceon V",
		pt: "Glaceon V",
		de: "Glaziola V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Narumi Sato",
	suffix: "V",

	attacks: [{
		name: {
			en: "Frozen Awakening",
			fr: "Éveil Glacé",
			es: "Despertar Gélido",
			it: "Risveglio Gelido",
			pt: "Frozen Awakening",
			de: "Eisiges Erwachen"
		},

		effect: {
			en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Heavy Snow",
			fr: "Chute de Neige",
			es: "Nieve Espesa",
			it: "Neve Fitta",
			pt: "Heavy Snow",
			de: "Einschneien"
		},

		effect: {
			en: "Discard a Stadium in play.",
			fr: "Défaussez un Stade en jeu.",
			es: "Descarta un Estadio en juego.",
			it: "Scarta una carta Stadio in gioco.",
			pt: "Discard a Stadium in play.",
			de: "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card