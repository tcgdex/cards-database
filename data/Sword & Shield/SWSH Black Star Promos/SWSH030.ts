import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Copperajah V",
		fr: "Pachyradjah V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Adamantine Press",
			fr: "Charge Adamantine"
		},

		effect: {
			en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		},

		damage: 90,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4
}

export default card