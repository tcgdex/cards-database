import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frogadier"
	},

	description: {
		en: "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Water Shuriken"
		},

		effect: {
			en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Mist Slash"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card