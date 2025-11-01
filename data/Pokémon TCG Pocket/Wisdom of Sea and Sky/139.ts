import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Furret",
		fr: "Fouinar"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Sentret"
	},

	description: {
		en: "The mother puts its offspring to sleep by curling up\naround them. It corners foes with speed.",
		fr: "La femelle s'enroule autour de ses petits pour les bercer. Il accule l'ennemi grâce à sa vitesse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tail Smash",
			fr: "Éclate-Queue"
		},

		damage: 80,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card