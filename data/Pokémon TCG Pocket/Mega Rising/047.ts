import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Turtonator",
		fr: "Boumata"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [776],
	hp: 110,
	types: ["Fire"],

	description: {
		en: "Eating sulfur in its volcanic habitat is what causes\nexplosive compounds to develop in its shell.\nIts droppings are also dangerously explosive."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shell Trap",
			fr: "Carapiège"
		},

		damage: 40,
		cost: ["Fire", "Fire"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 20 damage to the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque, le Pokémon Attaquant subit 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card