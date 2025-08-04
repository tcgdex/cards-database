import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
		es: "Machop",
		it: "Machop",
		pt: "Machop",
		de: "Machollo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				es: "Golpe Kárate",
				it: "Colpokarate",
				pt: "Golpe de Caratê",
				de: "Karateschlag"
			},
			effect: {
				en: "This attack does 60 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 60 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 60 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 60 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 60 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				de: "Dieser Angriff fügt 60 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "60−",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Submission",
				fr: "Sacrifice",
				es: "Sumisión",
				it: "Sottomissione",
				pt: "Submissão",
				de: "Überroller"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 293412,
		tcgplayer: 124071
	}
}

export default card
