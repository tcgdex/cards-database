import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zoroark"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [571],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	description: {
		en: "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Nighttime Byway"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is {{e}}{{e}} less."
		}
	}],

	attacks: [{
		name: {
			en: "Slashing Claw"
		},

		cost: ["Darkness", "Darkness", "Colorless"],

		damage: 90,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907703,
				tcgplayer: 716489
			}
		}
	],
}

export default card
