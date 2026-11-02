import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},

	illustrator: "Hasegawa Saki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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

	description: {
		en: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
		de: "Bewegt sich ein Digda unterirdisch fort, pflügt es dabei den Erdboden gleich mit und bereitet so den Anbau von Feldfrüchten vor."
	},

	dexId: [50],

	thirdParty: {
		cardmarket: 436579,
		tcgplayer: 208401
	}
}

export default card
