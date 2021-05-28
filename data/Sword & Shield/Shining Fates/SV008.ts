import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Coléodôme",
		en: "Dottler"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	evolveFrom: {
		fr: "Larvadar",
		en: "Blipbug"
	},

	attacks: [{
		name: {
			fr: "Protection",
			en: "Reflect"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent’s next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Collision",
			en: "Ram"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card