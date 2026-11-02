import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Horsea",
		de: "Seeper"
	},

	illustrator: "Taira Akitsu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes.",
		de: "Es lebt in Meeren mit ruhigem Gezeitenstrom. Wird es angegriffen, versprüht es tiefschwarze Tinte und ergreift daraufhin die Flucht."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Arrow",
			de: "Wasserpfeil"
		},

		cost: ["Water"],

		effect: {
			en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card