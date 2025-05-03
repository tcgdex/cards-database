import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Morelull"
	},

	description: {
		en: "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flickering Spores"
		},

		damage: 50,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
