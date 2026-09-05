import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Natu",
		fr: "Natu"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [177],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Because its wings aren't yet fully grown, it has to\nhop to get around. It is always staring\nat something.",
		fr: "Comme ses ailes ne sont pas complètement développées, il doit sauter pour se déplacer. Il observe toujours quelque chose."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card