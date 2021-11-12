import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Cursola",
		fr: "Corayôme de Galar",
		es: "Cursola de Galar",
		it: "Cursola di Galar",
		pt: "Cursola de Galar",
		de: "Galar-Gorgasonn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Galarian Corsola",
		fr: "Corayon de Galar",
		es: "Corsola de Galar",
		it: "Corsola di Galar",
		pt: "Corsola de Galar",
		de: "Galar-Corasonn"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "Be cautious of the ectoplasmic body surrounding its soul. You'll become stiff as stone if you touch it."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Force Regeneration"
		},

		effect: {
			en: "Put a Basic Pokémon V from your opponent's discard pile onto their Bench. If you do, put damage counters on that Pokémon until its remaining HP is 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Spooky Shot"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card