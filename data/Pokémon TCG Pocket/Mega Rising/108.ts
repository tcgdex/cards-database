import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [426],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive"
	},

	description: {
		en: "They carry people and Pokémon, but the\nwind can catch them, so there can't be a\nfixed destination."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Balloon Barrage",
			fr: "Barrage de Ballons"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card