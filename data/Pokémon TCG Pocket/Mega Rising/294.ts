import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu"
	},

	illustrator: "whomor Inc.",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [726],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou"
	},

	description: {
		en: "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches.",
		fr: "Il faut d'abord gagner sa confiance pour pouvoir le câliner. Mais attention, il est puissant et ses griffes acérées peuvent causer des égratignures."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique"
		},

		damage: 40,
		cost: ["Fire"],

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card