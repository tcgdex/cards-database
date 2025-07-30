import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Drampa"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		en: "The mountains it calls home are nearly two miles\nin height. On rare occasions, it descends to play\nwith the children living in the towns below."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dragon Breath"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	retreat: 2
}

export default card