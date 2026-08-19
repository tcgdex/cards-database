import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Herdier",
		fr: "Ponchien"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [507],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot"
	},

	description: {
		en: "The black fur that covers this Pokémon's body\nis dense and springy. Even sharp fangs bounce\nright off."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card