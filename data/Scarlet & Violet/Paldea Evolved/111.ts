import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		fr: "Ymphect",
		en: "Pupitar",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Embrylex",
		en: "Larvitar",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Culbute Surprise",
			en: "Headbutt Bounce",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shigenori Negishi",

	thirdParty: {
		cardmarket: 715586
	}
}

export default card