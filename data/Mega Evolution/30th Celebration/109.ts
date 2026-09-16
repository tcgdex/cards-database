import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Salamence"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [373],
	hp: 330,
	types: ["Dragon"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Booming Call"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put up to 3 Dragon Pokémon from your discard pile onto your Bench."
		}
	}, {
		name: {
			en: "Dragon Pulse"
		},

		cost: ["Fire", "Water"],

		damage: 240,

		effect: {
			en: "Discard the top 2 cards of your deck."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907716,
				tcgplayer: 716502
			}
		}
	],
}

export default card
