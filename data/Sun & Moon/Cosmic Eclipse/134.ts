import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
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
				en: "Bag Slash",
				fr: "Sac Lacéré",
				es: "Tajo Bolsa",
				it: "Laceraborsa",
				pt: "Rasga-bolsa",
				de: "Beutelschlitzer"
			},
			effect: {
				en: "Your opponent reveals their hand. Discard an Item card you find there.",
				fr: "Votre adversaire dévoile sa main. Défaussez une carte Objet que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Descarta 1 carta de Objeto que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Strumento presente tra esse.",
				pt: "Seu oponente revela a própria mão. Descarte 1 carta de Item que encontrar lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Lege 1 Itemkarte, die du dort findest, auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Sting",
				fr: "Dard",
				es: "Aguijonazo",
				it: "Puntura",
				pt: "Ferroada",
				de: "Einstich"
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

	thirdParty: {
		cardmarket: 408319,
		tcgplayer: 201178
	}
}

export default card
