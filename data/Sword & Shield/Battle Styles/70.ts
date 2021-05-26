import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Marowak",
		fr: "Ossatueur"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Battle Armor",
			fr: "Armurbaston"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Bonemerang",
			fr: "Osmerang"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face."
		},

		damage: "90×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card