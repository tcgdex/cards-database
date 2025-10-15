import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Xurkitree",
		fr: "Câblifère"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "Although it's alien to this world and a danger here, it's apparently\na common organism in the world where it normally lives.",
		fr: "Cette créature venue d'ailleurs est dangereuse dans notre monde, mais il semblerait qu'elle soit très commune dans le sien."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electronica",
			fr: "Electronica"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card