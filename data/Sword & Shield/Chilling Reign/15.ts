import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena",
		fr: "Sucreine"
	},

	illustrator: "Yuu Nishida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee",
		fr: "Candine"
	},

	attacks: [{
		name: {
			en: "Tread On",
			fr: "Piétinement"
		},

		effect: {
			en: "This attack does 50 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card