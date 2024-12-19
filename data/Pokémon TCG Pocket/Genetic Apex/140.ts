import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dugtrio"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Dig"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from -and effects of- attacks done to this Pokémon."
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	}
}

export default card
