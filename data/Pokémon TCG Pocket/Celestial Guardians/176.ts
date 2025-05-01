import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa"
	},

	illustrator: "Shinji Kanda",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		en: "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Berserk"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If any of your Benched Pokémon have damage on them, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card
