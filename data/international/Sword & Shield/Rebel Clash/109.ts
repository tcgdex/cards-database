import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Falinks",
		'fr-fr': "Hexadron",
		'es-es': "Falinks",
		'it-it': "Falinks",
		'pt-br': "Falinks",
		'de-de': "Legios"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [870],
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Team Attack",
				'fr-fr': "Attaque de Groupe",
				'es-es': "Ataque en Equipo",
				'it-it': "Attacco in Team",
				'pt-br': "Ataque em Equipe",
				'de-de': "Teamangriff"
			},
			effect: {
				'en-us': "This attack does 30 damage for each of your Benched Pokémon that has \"Falinks\" in its name.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc ayant « Hexadron » dans son nom.",
				'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca que tenga \"Falinks\" en su nombre.",
				'it-it': "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina con “Falinks” nel nome.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco que tenha \"Falinks” em seu nome.",
				'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, bei dem „Legios“ zum Namen gehört, 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Five of them are troopers, and one is the brass. The brass's orders are absolute."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457958,
				tcgplayer: 213200
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457958,
				tcgplayer: 213200
			}
		},
	],
}

export default card
