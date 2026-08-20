import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Dawn Wings Necrozma",
		es: "Necrozma Alas del Alba",
		de: "Morgenschwingen-Necrozma"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [800],
	hp: 110,
	types: ["Psychic"],

	description: {
		en: "Lunala no longer has a will of its own. Now under the\ncontrol of Necrozma, it continuously expels all of its energy.",
		es: "En esta forma, Lunala no goza de voluntad propia. Necrozma\ntiene control absoluto y absorbe su energía poco a poco.",
		de: "In dieser Form unterliegt Lunala gänzlich Necrozmas Kontrolle, es hat keinen eigenen Willen mehr. Seine Energie fließt ungehindert aus."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychobilly",
			es: "Psychobilly",
			de: "Psychobilly"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card