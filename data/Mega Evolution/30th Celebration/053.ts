import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Pika-Pika Parade"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Thunderbolt"
		},

		cost: ["Lightning", "Lightning", "Colorless"],

		damage: 200,

		effect: {
			en: "Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907660,
				tcgplayer: 712951
			}
		}
	],
}

export default card
