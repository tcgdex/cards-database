import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zekrom"
	},

	illustrator: "{{OBP|akagi|illustrator}}",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [644],
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	description: {
		en: "This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world."
	},

	attacks: [{
		name: {
			en: "Slash"
		},

		cost: ["Lightning", "Colorless"],

		damage: 50,
	}, {
		name: {
			en: "Nitro Thunder"
		},

		cost: ["Lightning", "Colorless", "Colorless"],

		damage: "80+",

		effect: {
			en: "If this Pokémon has any Fire Energy attached, this attack does 80 more damage."
		}
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
				cardmarket: 907663,
				tcgplayer: 716456
			}
		}
	],
}

export default card
