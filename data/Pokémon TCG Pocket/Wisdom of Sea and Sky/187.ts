import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ho-Oh ex",
		fr: "Ho-Oh-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Phoenix Turbo",
			fr: "Accélération du Phénix"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Take a {R}, {W}, and {L} Energy from your Energy Zone and attach them to your Benched Basic Pokémon in any way you like.",
			fr: "Prenez une Énergie {R}, {W} et {L} de votre zone Énergie et attachez-les à vos Pokémon de base de Banc comme il vous plaît."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card