import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Gyarados ex",
		fr: "Méga-Léviator-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [130],
	hp: 210,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Blaster",
			fr: "Méga Maelström"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard the top 3 cards of your opponent's deck.",
			fr: "Défaussez les 3 premières cartes du dessus du deck de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-gyarados"]
}

export default card