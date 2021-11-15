import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		en: "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Infestation"
		},

		damage: 10,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
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