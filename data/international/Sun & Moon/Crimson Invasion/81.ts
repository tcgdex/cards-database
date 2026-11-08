import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bug Search",
				'fr-fr': "Recherche Insecte",
				'es-es': "Búsqueda de Bichos",
				'it-it': "Coleoricerca",
				'pt-br': "Busca de Inseto",
				'de-de': "Käfersuche"
			},
			effect: {
				'en-us': "Your opponent reveals their hand.",
				'fr-fr': "Votre adversaire dévoile sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela a própria mão.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'es-es': "Aleteo",
				'it-it': "Alabattito",
				'pt-br': "Asa",
				'de-de': "Flattern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They flock in great numbers. Though small, they flap their wings with great power.",
	},

	thirdParty: {
		cardmarket: 311928,
		tcgplayer: 149107
	}
}

export default card
