import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Frillish"
	},

	description: {
		en: "Most of this Pokémon's body composition is\nidentical to sea water. It makes sunken ships\nits lair."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Devour Soul"
		},

		damage: 80,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card