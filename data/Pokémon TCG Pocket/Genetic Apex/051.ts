import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
		fr: "Il produit de la chaleur grâce au gaz inflammable qu'il emmagasine dans son corps. La partie jaune de son abdomen est particulièrement brûlante."
	}
}

export default card
