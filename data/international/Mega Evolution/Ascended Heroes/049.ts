import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Vanillite",
		'fr-fr': "Sorbébé de N",
		'es-es': "Vanillite de N",
		'es-mx': "Vanillite de N",
		'de-de': "Ns Gelatini",
		'it-it': "Vanillite di N",
		'pt-br': "Vanillite do N"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
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
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'es-mx': "Nieve Helada",
			'de-de': "Eisiger Schnee",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada"
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
		'en-us': "The temperature of their breath is -58 degrees Fahrenheit. They create snow crystals and make snow fall in the areas around them.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869660,
			tcgplayer: 675861
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870214,
			tcgplayer: 676891
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870213,
			tcgplayer: 677031
		}
	},
],
}

export default card