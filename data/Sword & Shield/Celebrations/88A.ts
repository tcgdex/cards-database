import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		en: "Mew ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Versatile"
		},

		effect: {
			en: "Mew ex can use the attacks of all Pokémon in play as its own. (You still need the necessary Energy to use each attack.)"
		}
	}],

	attacks: [{
		name: {
			en: "Power Move"
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokémon."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: ""
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576783
	}
}

export default card
