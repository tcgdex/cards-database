import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shieldon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Armor Fossil"
	},

	description: {
		en: "A mild-mannered, herbivorous Pokémon, it used its face to dig up tree roots to eat. The skin on its face was plenty tough."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
