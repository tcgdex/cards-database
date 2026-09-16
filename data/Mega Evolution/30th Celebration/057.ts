import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [807],
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "It runs as fast as lightning strikes, shredding its opponents with its high-voltage claws."
	},

	attacks: [{
		name: {
			en: "Rapid Draw"
		},

		cost: ["Colorless"],

		damage: 20,

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Electrobullet"
		},

		cost: ["Lightning", "Colorless"],

		damage: 50,

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
			type: "normal",
			thirdParty: {
				cardmarket: 907664,
				tcgplayer: 696831
			}
		}
	],
}

export default card
