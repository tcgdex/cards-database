import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius"
	},

	illustrator: "tono",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	description: {
		en: "Its cry sounds like an incantation. It is said the cry\nmay rarely be imbued with happiness-giving power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cursed Prose"
		},

		cost: ["Psychic"],

		effect: {
			en: "At the end of your opponent's next turn, do 90 damage to the Defending Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card