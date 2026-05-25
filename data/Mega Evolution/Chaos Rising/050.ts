import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886442,
				tcgplayer: 693493
			}
		},
	],

	name: {
		en: "Golbat"
	},

	illustrator: "Mousho",
	rarity: "Common",
	category: "Pokemon",
	dexId: [42],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Covert Flight"
		},

		cost: ["Darkness"],
		damage: 30,

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card