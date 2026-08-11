import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [177],

	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Me First",
				'fr-fr': "Moi d'Abord",
				'es-es': "Yo Primero",
				'it-it': "Precedenza",
				'pt-br': "Primeiro Eu",
				'de-de': "Egotrip"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is extremely good at climbing tree trunks and likes to eat the new sprouts on the trees."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457798,
				tcgplayer: 213162
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457798,
				tcgplayer: 213162
			}
		},
	],
}

export default card
