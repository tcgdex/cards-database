import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli",
		'it-it': "Eevee",
		'es-es': "Eevee",
		'pt-br': "Eevee"
	},

	illustrator: "Kariya",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família"
	},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
	}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'es-es': "Roer",
			'pt-br': "Roída"
	},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826138,
				tcgplayer: 637077
			}
		}
	]
}

export default card
