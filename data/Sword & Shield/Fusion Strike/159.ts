import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [263],
	set: Set,

	name: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar",
		es: "Zigzagoon de Galar",
		it: "Zigzagoon di Galar",
		pt: "Zigzagoon de Galar",
		de: "Galar-Zigzachs"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		en: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Lick"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card