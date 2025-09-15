import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja",
		fr: "Amphinobi"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Frogadier"
	},

	description: {
		en: "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.",
		fr: "Il transforme des jets d'eau sous pression en redoutables shuriken. Une fois lancés, ils tournent si vite qu'ils peuvent même couper le métal."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Water Shuriken",
			fr: "Sheauriken"
		},

		effect: {
			en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez infliger 20 dégâts à un Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Mist Slash",
			fr: "Tranche-Brume"
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