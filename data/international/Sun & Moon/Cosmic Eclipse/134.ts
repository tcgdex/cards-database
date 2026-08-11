import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		624,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bag Slash",
				'fr-fr': "Sac Lacéré",
				'es-es': "Tajo Bolsa",
				'it-it': "Laceraborsa",
				'pt-br': "Rasga-bolsa",
				'de-de': "Beutelschlitzer"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Discard an Item card you find there.",
				'fr-fr': "Votre adversaire dévoile sa main. Défaussez une carte Objet que vous y trouvez.",
				'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 carta de Objeto que encuentres entre ellas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Strumento presente tra esse.",
				'pt-br': "Seu oponente revela a própria mão. Descarte 1 carta de Item que encontrar lá.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege 1 Itemkarte, die du dort findest, auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sting",
				'fr-fr': "Dard",
				'es-es': "Aguijonazo",
				'it-it': "Puntura",
				'pt-br': "Ferroada",
				'de-de': "Einstich"
			},

			damage: 20,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "After shredding its prey, it sharpens its blades on a stone by the river. Each Pawniard has its own favorite sharpening stone.",
	},

	thirdParty: {
		cardmarket: 408319,
		tcgplayer: 201178
	}
}

export default card
