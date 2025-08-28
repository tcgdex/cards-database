import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Dugtrio"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Diglett"
	},

	description: {
		en: "Its three heads bob separately up and down to\nloosen the soil nearby, making it easier for it\nto burrow."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cliff Crumbler"
		},

		damage: 40,
		cost: ["Fighting"],

		effect: {
			en: "Discard the top card of your deck. If that card is a {F} Pokémon, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card