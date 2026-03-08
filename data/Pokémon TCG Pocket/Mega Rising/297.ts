import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwrath"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [62],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwhirl"
	},

	description: {
		en: "Its body is solid muscle. When swimming through\ncold seas, Poliwrath uses its impressive arms to\nsmash through drift ice and plow forward."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card