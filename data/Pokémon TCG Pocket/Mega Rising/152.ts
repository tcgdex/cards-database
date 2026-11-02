import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Skorupi",
		fr: "Rapion"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [451],
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It attacks using the claws on its tail. Once locked\nin its grip, its prey is unable to move as this\nPokémon's poison seeps in."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite",
			fr: "Piqûre"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card