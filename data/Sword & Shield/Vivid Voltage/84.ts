import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [195],

	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fickle Impact",
				fr: "Frappe Capricieuse",
				es: "Impacto Impredecible",
				it: "Impatto Bislacco",
				pt: "Impacto Errático",
				de: "Launischer Einschlag"
			},
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, this attack does nothing.",
				fr: "S'il vous reste exactement 2, 4 ou 6 cartes Récompense, cette attaque ne fait rien.",
				es: "Si te quedan exactamente 2, 4 o 6 cartas de Premio, este ataque no hace nada.",
				it: "Se hai esattamente due, quattro o sei carte Premio rimanenti, questo attacco non ha effetto.",
				pt: "Se você tiver exatamente 2, 4 ou 6 cartas de Prêmio restantes, este ataque não fará nada.",
				de: "Wenn du genau 2, 4 oder 6 verbleibende Preiskarten hast, hat diese Attacke keine Auswirkungen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It has an easygoing nature. It doesn't care if it bumps its head on boats and boulders while swimming."
	},

	thirdParty: {
		cardmarket: 511840,
		tcgplayer: 226492
	}
}

export default card
