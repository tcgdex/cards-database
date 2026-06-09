import { Card } from '../../../interfaces'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [810],
	set: Set,

	name: {
		en: "Grookey on the Ball"
	},

	illustrator: "The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tenacious Defense"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: 50
	}],

	regulationMark: "D"
}

export default card