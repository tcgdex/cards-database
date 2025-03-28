import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rhyperior"
	},

	illustrator: "Taiga Kayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhydon"
	},

	description: {
		en: "It can load up to three projectiles per arm into the holes in its hands. What launches out of those holes could be either rocks or Roggenrola."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Mountain Swing"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Discard the top 3 cards of your deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card
