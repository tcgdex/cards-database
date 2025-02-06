import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Marshadow"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it's imitating."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Revenge"
		},

		damage: "40+",
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Star"
}

export default card
