import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [996],
	set: Set,

	name: {
		fr: "Frigodo",
		en: "Frigibax",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax",
		de: "Frospino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Akira Komayama",

	description: {
		en: "Frigibax absorbs heat through its dorsal fin and converts the heat into ice energy. The higher the temperature, the more energy Frigibax stores.",
	},

	thirdParty: {
		cardmarket: 715532
	}
}

export default card