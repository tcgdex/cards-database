import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Sandslash"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Sandshrew"
	},

	description: {
		en: "It uses large, hooked claws to cut a path through deep snow as it runs. On snowy mountains, this Sandslash is faster than any other Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Armor"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 40 damage to the Attacking Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card