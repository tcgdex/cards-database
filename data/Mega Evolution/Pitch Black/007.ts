import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran",
		fr: "Heatran",
		es: "Heatran",
		'es-mx': "Heatran",
		de: "Heatran"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [485],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Singe"
		},

		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned"
		}
	}, {
		name: {
			en: "Lava Wall"
		},

		cost: ["Fire", "Fire", "Colorless"],

		damage: 120,

		effect: {
			en: "During your next turn, this Pokémon will receive no damage from attacks by your opponent's Burned Pokémon"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895795,
				tcgplayer: 704764
			}
		},
	],
}

export default card
