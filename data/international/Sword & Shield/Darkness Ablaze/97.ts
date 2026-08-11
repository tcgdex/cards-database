import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [766],

	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Hurl",
				'fr-fr': "Lance-Pierre",
				'es-es': "Lanzamiento de Rocas",
				'it-it': "Scaglia Pietre",
				'pt-br': "Lançamento de Pedras",
				'de-de': "Steinschleuderer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Displaying amazing teamwork, they follow the orders of their boss as they all help out in the search for their favorite berries."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483364,
				tcgplayer: 219493
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483364,
				tcgplayer: 219493
			}
		},
	],
}

export default card
