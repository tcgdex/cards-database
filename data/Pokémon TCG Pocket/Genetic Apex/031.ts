import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Skiddo",
		fr: "Cabriolaine"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Surprise Attack",
			fr: "Attaque Surprise"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.",
		fr: "Il y a encore peu, les personnes vivant dans les zones montagneuses se déplaçaient à dos de Cabriolaine."
	}
}

export default card
