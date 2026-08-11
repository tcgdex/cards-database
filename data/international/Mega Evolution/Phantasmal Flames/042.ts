import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mimikyu",
		'fr-fr': "Mimiqui",
		'es-es': "Mimikyu",
		'es-mx': "Mimikyu",
		'de-de': "Mimigma",
		'it-it': "Mimikyu",
		'pt-br': "Mimikyu"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [778],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'es-mx': "Llamar a la Familia",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 Pokémon Básico y ponlo en tu Banca. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'es-mx': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
	},

	illustrator: "miki kudo",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857617,
				tcgplayer: 662197,
				cardtrader: 356825
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857617,
				tcgplayer: 662197,
				cardtrader: 356825
			}
		},
	],
}

export default card
