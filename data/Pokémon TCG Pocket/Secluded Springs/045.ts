import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		en: "Rock-hard scales and oil-filled swim bladders\nallow this Pokémon to survive the intense water\npressure of the deep sea.",
		fr: "Il peut supporter la pression des profondeurs grâce à ses écailles aussi solides que le roc et à ses vessies natatoires remplies de graisse."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Take Down",
			fr: "Bélier"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card