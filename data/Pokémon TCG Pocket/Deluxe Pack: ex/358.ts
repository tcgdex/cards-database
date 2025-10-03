import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff"
	},

	illustrator: "Orca",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix"
	},

	description: {
		en: "By taking in a person's scent, it can sniff out their\nmental and physical condition. It's hoped that\nthis skill will have many medical applications."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sweets Relay"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card