import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras"
	},

	illustrator: "{{OBP|Masa|illustrator}}",
	rarity: "Common",
	category: "Pokemon",
	dexId: [131],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back."
	},

	attacks: [{
		name: {
			en: "Ferry Across"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Ice Beam"
		},

		cost: ["Water", "Colorless", "Colorless"],

		damage: 80,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907623,
				tcgplayer: 716450
			}
		}
	],
}

export default card
