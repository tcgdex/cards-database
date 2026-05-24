import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Keldeo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [647],
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shoot Through"
		},

		cost: ["Water"],
		damage: 20,

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		name: {
			en: "Reflect Energy"
		},

		cost: ["Water", "Water"],
		damage: 70,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693503
			}
		}
	],
}

export default card