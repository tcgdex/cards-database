import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [131],

	description: {
		en: "These Pokémon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Aqua Bullet"
		},

		damage: 20,

		effect: {
			en: "This attack does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		name: {
			en: "Hydro Pump"
		},

		damage: "70+",

		effect: {
			en: "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon."
		}
	}],

	name: {
		en: "Lapras"
	},

	rarity: "None",
	hp: 120,
	types: ["Water"],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412869,
				tcgplayer: 200966
			}
		}
	]
}

export default card
