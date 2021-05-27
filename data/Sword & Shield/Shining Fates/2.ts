import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Yanmega",
		en: "Yanmega"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		fr: "Yanma",
		en: "Yanma"
	},

	attacks: [{
		name: {
			fr: "Piqûre",
			en: "Bug Bite"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			fr: "Descente en Piqué",
			en: "Nosedive"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}]
}

export default card