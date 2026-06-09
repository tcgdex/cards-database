import { Card } from '../../../interfaces'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [816],
	set: Set,

	name: {
		en: "Sobble on the Ball"
	},

	illustrator: "The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Spectacular Save"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Rain Splash"
		},

		damage: 20
	}],

	regulationMark: "D"
}

export default card