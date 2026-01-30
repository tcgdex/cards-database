import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Gourgeist"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Pumpkaboo"
	},

	description: {
		en: "In the darkness of a new-moon night, Gourgeist\nwill come knocking. Whoever answers the door\nwill be swept off to the afterlife."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Soul Shot"
		},

		damage: 70,
		cost: ["Psychic"],

		effect: {
			en: "Discard a card from your hand. If you can't, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card