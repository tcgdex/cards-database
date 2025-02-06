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
	evolveFrom: {
		en: "Diglett"
	},


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

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
	}
}

export default card
