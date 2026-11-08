import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [220],
	set: Set,

	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'de-de': "Quiekel",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'es-mx': "Swinub"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'es-es': "Llamar a la Familia",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'pt-br': "Chamar a Família",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'de-de': "Sprungangriff",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'es-mx': "Embestida Brusca"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Nakamura Ippan",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817317,
				tcgplayer: 623592
			}
		},
	],
}

export default card
