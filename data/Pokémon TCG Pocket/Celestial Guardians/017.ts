import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Shiinotic"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
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
			en: "Flickering Light"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card