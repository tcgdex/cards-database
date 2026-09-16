import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "{{OBP|akagi|illustrator}}",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	attacks: [{
		name: {
			en: "Agility"
		},

		cost: ["Colorless"],

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
		}
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
				cardmarket: 907651,
				tcgplayer: 712948
			}
		}
	],
}

export default card
