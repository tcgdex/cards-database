import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Pupitar"
	},

	illustrator: "Sekio",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Larvitar"
	},

	description: {
		en: "This pupa flies around wildly by venting with\ngreat force the gas pressurized inside its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card