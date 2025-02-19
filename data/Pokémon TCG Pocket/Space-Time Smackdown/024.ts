import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magmortar"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Magmar"
	},

	description: {
		en: "When Magmortar inhales deeply, the fire burning in its belly intensifies, rising in temperature to over 3,600 degrees Fahrenheit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bursting Inferno"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card
