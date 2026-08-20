import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot",
		fr: "Pijako"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It can learn and speak human words. If they gather,\nthey all learn the same saying.",
		fr: "On peut lui enseigner quelques mots. S'il s'agit d'un groupe, ils retiendront les mêmes phrases."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sleepy Song",
			fr: "Chanson Berçante"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card