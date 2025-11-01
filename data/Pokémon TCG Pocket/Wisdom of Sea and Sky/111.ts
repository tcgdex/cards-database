import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Spinarak"
	},

	description: {
		en: "Every night, it wanders around in search of\nprey, whose movements it restrains by spewing\nthreads before it bites into them with its fangs.",
		fr: "Il erre chaque nuit à la recherche d'une proie. Quand il en trouve une, il l'immobilise grâce à ses fils, puis la croque avec ses mandibules."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bind Down",
			fr: "Astreinte"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card