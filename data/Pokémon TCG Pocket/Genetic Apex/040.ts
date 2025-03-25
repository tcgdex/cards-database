import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
		fr: "Une veille estampe montre que les êtres humains étaient fascinés par ses mouvements lorsqu'il courait dans les champs."
	}
}

export default card
