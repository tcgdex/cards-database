import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dusknoir"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [477],
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dusclops"
	},

	description: {
		en: "With the mouth on its belly, Dusknoir swallows its\ntarget whole. The soul is the only thing eaten—\nDusknoir disgorges the body before departing."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fade into Darkness"
		},

		effect: {
			en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't get any points for it."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In"
		},

		damage: 80,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card