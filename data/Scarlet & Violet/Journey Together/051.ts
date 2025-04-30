import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex",
		fr: "Tokorico-ex",
		es: "Tapu Koko ex",
		de: "Kapu-Riki-ex",
		it: "Tapu Koko-ex",
		pt: "Tapu Koko ex",
		'es-mx': "Tapu Koko ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Linked Lightning",
			fr: "Éclairs Liés",
			es: "Relámpago Encadenado",
			de: "Verbundener Blitz",
			it: "Fulmine Combinato",
			pt: "Raios Reunidos",
			'es-mx': "Relámpago en Cadena"
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua panchina.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon en Banca."
		},

		damage: "60+"
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
