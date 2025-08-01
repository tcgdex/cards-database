import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [167],

	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hang Down",
				fr: "Suspension",
				es: "Prender",
				it: "Tirar Giù",
				pt: "Dependurar",
				de: "Herunterhängen"
			},

			damage: 10,

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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web."
	},

	thirdParty: {
		cardmarket: 483389
	}
}

export default card
