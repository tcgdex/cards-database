import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Dark Gyarados"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Beam"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
		},

		damage: 30,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Grass",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "Normally found only in the deep ocean, it has recently been seen in shallow waters as well."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Final Beam"
		},

		effect: {
			en: "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed."
		}
	}],

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576775
	}
}

export default card
