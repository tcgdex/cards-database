import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		it: "Hippowdon",
		pt: "Hippowdon",
		de: "Hippoterus"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
				es: "Golpe Triple",
				it: "Tripla Schiacciata",
				pt: "Pancada Tripla",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Crush",
				fr: "Écras'Terre",
				es: "Aterrizaje",
				it: "Schiacciaterra",
				pt: "Aperto de Terra",
				de: "Schollenbrecher"
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Stones can get stuck in the ports on their bodies. Dwebble help dislodge such stones, so Hippowdon look after these Pokémon."
	}
}

export default card
