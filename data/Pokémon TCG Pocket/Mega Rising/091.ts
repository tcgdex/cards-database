import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika",
		fr: "Zéblitz"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [523],
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron"
	},

	description: {
		en: "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card