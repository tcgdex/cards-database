import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'de-de': "Kangama",
		'it-it': "Kangaskhan",
		'es-es': "Kangaskhan",
		'pt-br': "Kangaskhan"
	},

	illustrator: "Uta",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'de-de': "Megahieb",
			'it-it': "Megapugno",
			'es-es': "Megapuño",
			'pt-br': "Megassoco"
	},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 826141,
				tcgplayer: 637413
			},
		}
	]
}

export default card
