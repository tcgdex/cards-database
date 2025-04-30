import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		de: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		'es-mx': "Wailord"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			de: "Hydropumpe",
			it: "Idropompa",
			pt: "Jato d'Água",
			'es-mx': "Hidrobomba"
		},

		effect: {
			en: "This attack does 50 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía Water unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 50 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada Energía Water unida a este Pokémon."
		},

		damage: "10+"
	}],

	retreat: 4,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": false,
		"wPromo": false,
		}
}

export default card
