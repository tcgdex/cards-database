import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		de: "Felori"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Mini Drain",
			fr: "Mini-Assèchement",
			es: "Minidrenaje",
			it: "Miniassorbimento",
			pt: "Minidreno",
			de: "Minisauger"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Yuu Nishida",
	description: {
		en: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
	},
	variants: [
		{
			type: "holo"
		}
	],
}

export default card