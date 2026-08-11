import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [888],

	name: {
		'en-us': "Zacian",
		'fr-fr': "Zacian",
		'es-es': "Zacian",
		'it-it': "Zacian",
		'pt-br': "Zacian",
		'de-de': "Zacian"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Amazing Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Metal Armament",
				'fr-fr': "Artillerie Métallique",
				'es-es': "Armamento Metálico",
				'it-it': "Dotazione Metallica",
				'pt-br': "Armamento de Metal",
				'de-de': "Metallrüstung"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Metal",
			],
			name: {
				'en-us': "Amazing Sword",
				'fr-fr': "Épée Magnifique",
				'es-es': "Espada Increíble",
				'it-it': "Spada Policroma",
				'pt-br': "Espada Incrível",
				'de-de': "Atemberaubendes Schwert"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon VMAX in play, this attack does 150 more damage.",
				'fr-fr': "Si votre adversaire a au moins un Pokémon-VMAX en jeu, cette attaque inflige 150 dégâts supplémentaires.",
				'es-es': "Si tu rival tiene algún Pokémon VMAX en juego, este ataque hace 150 puntos de daño más.",
				'it-it': "Se il tuo avversario ha dei Pokémon-VMAX in gioco, questo attacco infligge 150 danni in più.",
				'pt-br': "Se o seu oponente tiver algum Pokémon VMAX em jogo, este ataque causará 150 pontos de dano a mais.",
				'de-de': "Wenn dein Gegner mindestens 1 Pokémon-VMAX im Spiel hat, fügt diese Attacke 150 Schadenspunkte mehr zu."
			},
			damage: "150+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511830,
				tcgplayer: 226490
			}
		},
	],
}

export default card
