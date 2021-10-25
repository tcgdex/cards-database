import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Obstagoon"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [862],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Linoone"
	},

	description: {
		en: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Untamed Shout"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Obstruct"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card