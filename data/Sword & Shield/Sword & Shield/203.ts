import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lapras VMAX",
		fr: "Lokhlass VMAX",
		es: "Lapras VMAX",
		it: "Lapras VMAX",
		pt: "Lapras VMAX",
		de: "Lapras VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lapras V",
		fr: "Lokhlass-V",
		es: "Lapras V",
		it: "Lapras V",
		pt: "Lapras V",
		de: "Lapras V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Pump",
				fr: "Pompe G-Max",
				es: "Gigabomba",
				it: "Gigapompa",
				pt: "Jato G-Max",
				de: "Giga-Pumpe"
			},
			effect: {
				en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
