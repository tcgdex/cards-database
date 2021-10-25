import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [888],
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intrepid Sword"
		},

		effect: {
			en: "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Metal Energy cards you find there to this Pokémon. Put the other cards into your hand. If you use this Ability, your turn ends."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			en: "Brave Blade"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 230
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card