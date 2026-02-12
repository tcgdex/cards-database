import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket’s Scizor"
	},

	illustrator: "K. Hoshiba",
	rarity: "None",
	category: "Pokemon",	
	types: ["Metal",],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Focus"
		},

		effect: {
			en: "During your next turn, Rocket’s Scizor’s Agility attack’s damage is doubled."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Agility"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, during your opponent’s next turn, prevent all effects of attacks, including damage, done to Rocket’s Scizor."
		}
	}],

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["winner"]
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
