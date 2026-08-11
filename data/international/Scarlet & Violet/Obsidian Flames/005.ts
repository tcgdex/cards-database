import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [213],
	set: Set,

	name: {
		'fr-fr': "Caratroc",
		'en-us': "Shuckle",
		'es-es': "Shuckle",
		'it-it': "Shuckle",
		'pt-br': "Shuckle",
		'de-de': "Pottrott"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Parfum de Baies",
			'en-us': "Berry Scent",
			'es-es': "Aroma de Bayas",
			'it-it': "Aroma di Bacca",
			'pt-br': "Aroma de Fruta",
			'de-de': "Beerenduft"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Pression de Garde",
			'en-us': "Guard Press",
			'es-es': "Presión de Guardia",
			'it-it': "Pressadifesa",
			'pt-br': "Aperto Protetor",
			'de-de': "Schutzdruck"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The berries stored in its vaselike shell eventually become a thick, pulpy juice.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725085,
				tcgplayer: 509657,
				cardtrader: 255565
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725085,
				tcgplayer: 509657,
				cardtrader: 255565
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
