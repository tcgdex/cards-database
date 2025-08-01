import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
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
				en: "Searching Light",
				fr: "Sonde Lumineuse",
				es: "Buscaluz",
				it: "Proiettore",
				pt: "Procurar Luz",
				de: "Suchscheinwerfer"
			},
			effect: {
				en: "Look at 1 of your face-down Prize cards.",
				fr: "Regardez l’une de vos cartes Récompense (actuellement face cachée).",
				es: "Mira 1 de tus cartas de Premio que están boca abajo.",
				it: "Guarda una delle tue carte Premio coperte.",
				pt: "Olhe 1 das suas cartas de Prêmio viradas para baixo.",
				de: "Sieh dir 1 deiner verdeckten Preiskarten an."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
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

	thirdParty: {
		cardmarket: 295360
	}
}

export default card
