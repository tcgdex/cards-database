import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool",
		fr: "Moumouflon"
	},

	illustrator: "You Iribi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [832],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Wooloo",
		fr: "Moumouton"
	},

	description: {
		en: "Its majestic horns are meant only to impress the\nopposite gender. They never see use in battle."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card