import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	dexId: [658],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Frogadier"
	},

	description: {
		'en-us': "It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.",
		'fr-fr': "Il transforme des jets d'eau sous pression en redoutables shuriken. Une fois lancés, ils tournent si vite qu'ils peuvent même couper le métal."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Water Shuriken",
			'fr-fr': "Sheauriken"
		},

		effect: {
			'en-us': "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez infliger 20 dégâts à un Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Mist Slash",
			'fr-fr': "Tranche-Brume"
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