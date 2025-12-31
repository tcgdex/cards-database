import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Tirtouga"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Cover Fossil"
	},

	description: {
		en: "Tirtouga is considered to be the ancestor of\nmany turtle Pokémon. It was restored to life\nfrom a fossil."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shell Attack"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card