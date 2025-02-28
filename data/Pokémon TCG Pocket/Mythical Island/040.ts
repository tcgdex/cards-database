import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix"
	},

	description: {
		en: "By taking in a person's scent, it can sniff out their mental and physical condition. It's hoped that this skill will have many medical applications."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Magical Shot"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
