import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub",
		'it-it': "Numel",
		'es-es': "Numel",
		'pt-br': "Numel",
		'es-mx': "Numel"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [322],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'it-it': "Cerca Famiglia",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'es-es': "Llama",
			'pt-br': "Chama",
			'es-mx': "Llama"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851092,
				tcgplayer: 654360
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851092,
				tcgplayer: 654360
			}
		},
	],
}

export default card
