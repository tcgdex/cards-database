import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine"
	},

	attacks: [{
		name: {
			en: "Coal Cannon",
			fr: "Canon Charbonneux"
		},

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face."
		},

		damage: "90×",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 50 dégâts."
		},

		damage: 200,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card