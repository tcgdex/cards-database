import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'es-mx': "Drilbur",
		'de-de': "Rotomurf",
		'it-it': "Drilbur",
		'pt-br': "Drilbur"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [529],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'es-mx': "Llamar a la Familia",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'es-es': "Hundir Garras",
			'es-mx': "Clavar Garras",
			'de-de': "Schaufelkrallen",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895832,
				tcgplayer: 704803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895832,
				tcgplayer: 704803
			}
		},
	],
}

export default card
