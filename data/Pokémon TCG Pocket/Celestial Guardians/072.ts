import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Grumpig"
	},

	illustrator: "Yukiko Baba",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spoink"
	},

	description: {
		en: "It can perform odd dance steps to influence foes. Its style of dancing became hugely popular overseas."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Zen Headbutt"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card