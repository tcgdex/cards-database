import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		'en-us': "Hisuian Basculin",
		'fr-fr': "Bargantua de Hisui",
		'es-es': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'pt-br': "Basculin de Hisui",
		'de-de': "Hisui-Barschuft"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gather the Crew",
			'fr-fr': "Réunion des Troupes",
			'es-es': "Juntar al Equipo",
			'it-it': "Squadra a Raccolta",
			'pt-br': "Juntar a Galera",
			'de-de': "Alle an Bord"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Though it differs from other Basculin in several respects, including demeanor—this one is gentle—I have categorized it as a regional form given the vast array of shared qualities.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658582,
				tcgplayer: 272243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658582,
				tcgplayer: 272243
			}
		},
	],
}

export default card
