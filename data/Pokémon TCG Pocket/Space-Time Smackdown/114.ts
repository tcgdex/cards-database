import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bastiodon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Shieldon"
	},

	description: {
		en: "The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokémon was successfully restored."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guarded Grill"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, this Pokémon takes −100 damage from that attack."
		}
	}],

	attacks: [{
		name: {
			en: "Headbang"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card
