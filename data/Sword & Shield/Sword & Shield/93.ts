import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		es: "Dugtrio",
		it: "Dugtrio",
		pt: "Dugtrio",
		de: "Digdri"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Bomb",
				fr: "Boue-Bombe",
				es: "Bomba Fango",
				it: "Pantanobomba",
				pt: "Bomba de Lama",
				de: "Schlammbombe"
			},

			damage: 60,

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
		en: "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground."
	},

	dexId: [51],

	thirdParty: {
		cardmarket: 436584
	}
}

export default card
