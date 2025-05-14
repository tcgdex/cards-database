import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Fire Blast",
			fr: "Déflagration"
		},

		effect: {
			en: "Discard a R Energy from this Pokémon.",
			fr: "Défaussez une Énergie R de ce Pokémon."
		},

		damage: "130"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
		fr: "Quand il génère de la chaleur, sa températeur est d'environ 800 °C. Il se sert de son corps comme d'un fouet pour sauter sur ses ennemis."
	}
}

export default card
