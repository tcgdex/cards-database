import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [474],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2"
	},

	description: {
		en: "Porygon-Z had a program installed to allow it to\nmove between dimensions, but the program also\ncaused instability in Porygon-Z's behavior.",
		fr: "Depuis qu'on lui a ajouté un programme permettant de voyager entre les dimensions, son comportement est devenu instable."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Slowing Beam",
			fr: "Rayon Ralentissant"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent une Énergie  de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card