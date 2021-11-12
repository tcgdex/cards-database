import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Chomp Chomp Hold"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card