import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Searching Light",
				'fr-fr': "Sonde Lumineuse",
				'es-es': "Buscaluz",
				'it-it': "Proiettore",
				'pt-br': "Procurar Luz",
				'de-de': "Suchscheinwerfer"
			},
			effect: {
				'en-us': "Look at 1 of your face-down Prize cards.",
				'fr-fr': "Regardez l’une de vos cartes Récompense (actuellement face cachée).",
				'es-es': "Mira 1 de tus cartas de Premio que están boca abajo.",
				'it-it': "Guarda una delle tue carte Premio coperte.",
				'pt-br': "Olhe 1 das suas cartas de Prêmio viradas para baixo.",
				'de-de': "Sieh dir 1 deiner verdeckten Preiskarten an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in the depths beyond the reach of sunlight. It flashes lights on its antennae to communicate with others of its kind.",
	},

	thirdParty: {
		cardmarket: 295360,
		tcgplayer: 126920
	}
}

export default card
