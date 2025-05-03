import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Dusclops"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull"
	},

	description: {
		en: "It seeks drifting will-o'-the-wisps and sucks them into its empty body. What happens inside is a mystery."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psypunch"
		},

		damage: 50,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
