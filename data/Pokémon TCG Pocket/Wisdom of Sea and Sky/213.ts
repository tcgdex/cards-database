import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "Inhaled air is carried to its flame sac, heated,\nand exhaled as fire that reaches over 3,000\ndegrees Fahrenheit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Assisting Heater"
		},

		damage: 40,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card