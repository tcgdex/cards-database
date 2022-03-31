import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Balloon Barrage",
				fr: "Barrage de Ballons",
				es: "Bombardeo de Globos",
				it: "Pioggiapalloni",
				pt: "Barricada de Balões",
				de: "Ballonbeschuss"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos vezes a quantidade de Energia ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
