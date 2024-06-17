import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		fr: "Mustéflott",
		en: "Floatzel",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		fr: "Mustébouée",
		en: "Buizel"
	},

	attacks: [{
		name: {
			fr: "Surf",
			en: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft."
	}
}

export default card
