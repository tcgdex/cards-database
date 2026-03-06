import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Frillish",
		fr: "Viskuse"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [592],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It envelops its prey in its veillike arms and draws\nit down to the deeps, five miles below the\nocean's surface.",
		fr: "Il utilise ses membres en forme de voiles pour enlacer ses proies et les entraîner à 8 000 m de profondeur sous la surface de l'eau."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Absorb",
			fr: "Vole-Vie"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card