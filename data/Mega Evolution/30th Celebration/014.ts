import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Reshiram"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [643],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	description: {
		en: "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth."
	},

	attacks: [{
		name: {
			en: "Slash"
		},

		cost: ["Fire", "Colorless"],

		damage: 50,
	}, {
		name: {
			en: "Laser Flame"
		},

		cost: ["Fire", "Colorless", "Colorless"],

		damage: "80+",

		effect: {
			en: "If this Pokémon has any Lightning Energy attached, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907620,
				tcgplayer: 716447
			}
		}
	],
}

export default card
