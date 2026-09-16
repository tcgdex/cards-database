import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It raises its offspring in its belly pouch. It lets its baby out to play only when it feels safe to do so."
	},

	attacks: [{
		name: {
			en: "Rage"
		},

		cost: ["Colorless", "Colorless"],

		damage: "20+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon."
		}
	}, {
		name: {
			en: "Mega Punch"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 100,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907721,
				tcgplayer: 716506
			}
		}
	],
}

export default card
