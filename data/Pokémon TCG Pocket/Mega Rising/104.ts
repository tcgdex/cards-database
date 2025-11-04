import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dusclops"
	},

	illustrator: "Kazuma Koda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull"
	},

	description: {
		en: "It seeks drifting will-o'-the-wisps and sucks them\ninto its empty body. What happens inside is\na mystery."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card