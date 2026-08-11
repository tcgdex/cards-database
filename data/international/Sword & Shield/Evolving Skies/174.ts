import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Glaceon V",
		'fr-fr': "Givrali V",
		'es-es': "Glaceon V",
		'it-it': "Glaceon V",
		'pt-br': "Glaceon V",
		'de-de': "Glaziola V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Frozen Awakening",
			'fr-fr': "Éveil Glacé",
			'es-es': "Despertar Gélido",
			'it-it': "Risveglio Gelido",
			'pt-br': "Frozen Awakening",
			'de-de': "Eisiges Erwachen"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Heavy Snow",
			'fr-fr': "Chute de Neige",
			'es-es': "Nieve Espesa",
			'it-it': "Neve Fitta",
			'pt-br': "Heavy Snow",
			'de-de': "Einschneien"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta un Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Discard a Stadium in play.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	dexId: [471],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574232,
				tcgplayer: 246746
			}
		},
	],
}

export default card
