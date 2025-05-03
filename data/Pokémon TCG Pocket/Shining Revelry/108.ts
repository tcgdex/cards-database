import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Stoke"
		},

		cost: ["Fire"],

		effect: {
			en: "Take 3 [Fire] Energy from your Energy Zone and attach it to this Pokémon."
		}
	}, {
		name: {
			en: "Steam Artillery"
		},

		damage: 150,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Shiny"
}

export default card