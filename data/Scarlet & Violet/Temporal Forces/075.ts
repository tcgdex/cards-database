import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mini Drain",
			fr: "Mini-Assèchement",
			es: "Minidrenaje",
			it: "Miniassorbimento",
			pt: "Minidreno"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card