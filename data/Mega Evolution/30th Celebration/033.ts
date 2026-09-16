import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Narumi Sato",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Keep Hidden"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Tiny Charge"
		},

		cost: ["Lightning"],

		damage: 10,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907640,
				tcgplayer: 712940
			}
		}
	],
}

export default card
