import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [231],
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Strike Back",
				fr: "Vengeur",
				es: "Contraimpacto",
				it: "Risposta",
				pt: "Revidar",
				de: "Kontern"
			},
			effect: {
				en: "This attack does 30 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	}
}

export default card
