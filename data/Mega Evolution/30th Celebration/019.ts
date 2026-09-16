import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Kyogre"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [382],
	hp: 140,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "In myths, this Pokémon expanded the seas with torrential rains and great tsunamis. It battled ferociously against Groudon."
	},

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		damage: "60+",

		effect: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907625,
				tcgplayer: 716452
			}
		}
	],
}

export default card
