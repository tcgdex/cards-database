import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [812],
	hp: 150,
	types: ["Grass"],

	evolveFrom: {
		en: "Thwackey"
	},

	description: {
		en: "The one with the best drumming techniques\nbecomes the boss of the troop. It has a gentle\ndisposition and values harmony among its group."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Captivating Rhythm"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot."
		}
	}],

	attacks: [{
		name: {
			en: "Drum Rush"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card