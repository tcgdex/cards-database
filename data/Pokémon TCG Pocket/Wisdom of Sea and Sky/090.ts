import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Munna",
		fr: "Munna"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Late at night, it appears beside people's pillows.\nAs it feeds on dreams, the patterns on its body\ngive off a faint glow.",
		fr: "Il apparaît en pleine nuit, à côté de l'oreiller. Quand il se nourrit de rêves, les motifs de son corps luisent légèrement."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card