import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litten"
	},

	description: {
		en: "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches.",
		fr: "Il faut d'abord gagner sa confiance pour pouvoir le câliner. Mais attention, il est puissant et ses griffes acérées peuvent causer des égratignures."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card