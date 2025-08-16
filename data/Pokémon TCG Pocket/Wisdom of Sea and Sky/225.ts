import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidorina"
	},

	description: {
		en: "Nidoqueen is better at defense than offense.\nWith scales like armor, this Pokémon will shield\nits children from any kind of attack."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Lovestrike"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "This attack does 50 more damage for each of your Benched Nidoking."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card