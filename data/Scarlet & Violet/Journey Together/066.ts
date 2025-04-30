import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Cutiefly",
		fr: "Bombydou de Lilie",
		es: "Cutiefly de Lylia",
		de: "Lillys Wommel",
		it: "Cutiefly di Lylia",
		pt: "Cutiefly da Lílian",
		'es-mx': "Cutiefly de Lillie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Hold Still",
			fr: "Ne Bougez Pas",
			es: "Permanecer Inmóvil",
			de: "Stillhalten",
			it: "Immobile",
			pt: "Ficar Parado",
			'es-mx': "Sin Moverse"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	retreat: 0,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
