import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [342],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish"
	},

	description: {
		en: "A brutish Pokémon that loves to battle. It will\ncrash itself into any foe that approaches its nest."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guillotine"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card