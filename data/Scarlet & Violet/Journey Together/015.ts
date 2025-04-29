import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		de: "Viridium",
		it: "Virizion",
		pt: "Virizion",
		'es-mx': "Virizion"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			de: "Blattsauger",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			'es-mx': "Hojadrenado"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			de: "Schwertschneide",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			'es-mx': "Cuchilla Cortante"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
