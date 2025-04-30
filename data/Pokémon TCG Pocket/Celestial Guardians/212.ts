import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Ryuta Fuse",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Ivysaur"
	},

	description: {
		en: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card