import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Corvisquire",
		fr: "Bleuseille"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [822],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange"
	},

	description: {
		en: "This intelligent Pokémon will quickly learn how to\nuse any tool it can hold in its beak or its talons."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card