import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
	}
}

export default card
