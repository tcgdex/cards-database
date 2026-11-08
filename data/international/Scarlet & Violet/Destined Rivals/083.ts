import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [343],
	set: Set,

	name: {
		'en-us': "Steven's Baltoy",
		'fr-fr': "Balbuto de Pierre",
		'de-de': "Troys Puppance",
		'it-it': "Baltoy di Rocco",
		'es-es': "Baltoy de Máximo",
		'pt-br': "Baltoy do Steven",
		'es-mx': "Baltoy de Steven"
	},


	illustrator: "Tonji Matsuno",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Summoning Sign",
			'fr-fr': "Signe Invocatoire",
			'de-de': "Beschwörendes Zeichen",
			'it-it': "Segno Evocativo",
			'es-es': "Señal de Invocación",
			'pt-br': "Sinal Invocador",
			'es-mx': "Señal de Invocación"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Steven's Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de Pierre de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Troys-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon di Rocco Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon de Máximo Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Pokémon do Steven Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon de Steven Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'de-de': "Psychosphäre",
			'it-it': "Psicosfera",
			'es-es': "Esfera Psíquica",
			'pt-br': "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825957,
				tcgplayer: 632893
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825957,
				tcgplayer: 632893
			}
		},
	],
}

export default card
