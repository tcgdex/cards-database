import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lokhlass VMAX",
		en: "Lapras VMAX",
		es: "Lapras VMAX",
		it: "Lapras VMAX",
		pt: "Lapras VMAX",
		de: "Lapras VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		fr: "Lokhlass-V",
		en: "Lapras V"
	},

	attacks: [{
		name: {
			fr: "Pompe G-Max",
			en: "G-Max Pump",
			es: "Gigabomba",
			it: "Gigapompa",
			pt: "Jato G-Max",
			de: "Giga-Pumpe"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX"
}

export default card