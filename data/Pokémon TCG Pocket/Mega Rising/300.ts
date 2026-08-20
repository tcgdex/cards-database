import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio",
		fr: "Otaquin"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [728],
	hp: 60,
	types: ["Water"],

	description: {
		en: "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
		fr: "Grâce à son entraînement quotidien, les ballons qu'il gonfle avec son nez sont de plus en plus gros."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sing",
			fr: "Berceuse"
		},

		cost: ["Colorless"],

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
	boosters: ["mega-altaria"]
}

export default card