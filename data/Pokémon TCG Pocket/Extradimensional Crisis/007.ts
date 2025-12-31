import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pheromosa",
		fr: "Cancrelove"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "A life-form that lives in another world, its body\nis thin and supple, but it also possesses\ngreat power.",
		fr: "Une forme de vie venant d'un autre monde. Son corps gracile cache une puissance insoupçonnée."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jump Blues",
			fr: "Jump Blues"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card