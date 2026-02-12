import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket’s Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",	
	types: ["Fighting",],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Crosscounter"
		},

		effect: {
			en: "If an attack does damage to Rocket’s Hitmonchan during your opponent’s next turn (even if Rocket’s Hitmonchan is Knocked Out), flip a coin. If heads, Rocket’s Hitmonchan attacks your opponent’s Active Pokémon for double that amount of damage. (If Rocket’s Hitmonchan takes 20 damage, it does 40 damage to that Pokémon.)"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Magnum Punch"
		},

		damage: 50
	}],

	variants: [
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"]
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
