import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zacian V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

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
		name: {
			en: "Brave Blade"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack."
		},

		damage: 230,
		cost: ["Metal", "Metal", "Metal"]
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