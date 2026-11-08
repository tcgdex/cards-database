import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [312],
	set: Set,

	name: {
		'en-us': "Minun",
		'fr-fr': "Négapi",
		'es-es': "Minun",
		'it-it': "Minun",
		'pt-br': "Minun",
		'de-de': "Minun"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		'en-us': "It cheers on friends. If its friends are losing, its body lets off more and more sparks."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la Famille",
			'de-de': "Familienruf",
			'es-es': "Llamar a la Familia",
			'pt-br': "Chamar a Família",
			'it-it': "Cerca Famiglia"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'de-de': "Statischer Schock",
			'es-es': "Impacto Estático",
			'pt-br': "Choque de Estática",
			'it-it': "Shock Statico"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582482,
				tcgplayer: 253246
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582482,
				tcgplayer: 253246
			}
		},
	],
}

export default card
