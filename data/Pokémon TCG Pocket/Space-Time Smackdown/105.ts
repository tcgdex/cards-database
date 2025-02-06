import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Skorupi"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
