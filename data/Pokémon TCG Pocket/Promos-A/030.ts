import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "En Morikura",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
