import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [136],
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "Inhaled air is carried to its flame sac, heated,\nand exhaled as fire that reaches over 3,000\ndegrees Fahrenheit.",
		'fr-fr': "Sa glande enflammée chauffe l'air qu'il inspire. Il l'exhale ensuite sous forme de flamme atteignant les 1 700 °C."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Assisting Heater",
			'fr-fr': "Assistant Thermique"
		},

		damage: 40,
		cost: ["Fire", "Colorless"],

		effect: {
			'en-us': "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
			'fr-fr': "Prenez une Énergie {R} de votre zone Énergie et attachez-la à l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card