import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Obstagoon"
	},

	illustrator: "Mousho",
	rarity: "One Star",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Linoone"
	},

	description: {
		en: "It evolved after experiencing numerous fights.\nWhile crossing its arms, it lets out a shout that\nwould make any opponent flinch."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Merciless Strike"
		},

		damage: 70,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card