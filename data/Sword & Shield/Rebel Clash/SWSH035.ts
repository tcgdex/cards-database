import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [724],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Dartrix"
	},

	description: {
		en: "As if wielding a bow, it launches the arrow quills hidden among the feathers of its wings. Decidueye's shots never miss."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Deep Forest Camo"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V and Pokémon-GX."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Splitting Arrow"
		},

		effect: {
			en: "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card