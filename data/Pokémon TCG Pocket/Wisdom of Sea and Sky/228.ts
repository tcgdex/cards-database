import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidorino"
	},

	description: {
		en: "When it goes on a rampage, it's impossible to\ncontrol. But in the presence of a Nidoqueen it's\nlived with for a long time, Nidoking calms down."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Poison Horn"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card