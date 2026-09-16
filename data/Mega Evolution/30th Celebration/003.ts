import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Volbeat"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [313],
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	description: {
		en: "It flashes the light on its rear to communicate with other Volbeat. It loves the sweet aroma given off by Illumise."
	},

	attacks: [{
		name: {
			en: "Luring Glow"
		},

		cost: ["Grass"],

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot."
		}
	}, {
		name: {
			en: "Bug Buzz"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 90,
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907609,
				tcgplayer: 716437
			}
		}
	],
}

export default card
