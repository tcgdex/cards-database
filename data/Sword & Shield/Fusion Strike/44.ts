import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "aky CG Works",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Flare"
		},

		damage: 50
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "All-Out Shot"
		},

		damage: 210,

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
