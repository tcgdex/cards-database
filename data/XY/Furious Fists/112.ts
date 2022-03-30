import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "M Heracross EX",
		fr: "M-Scarhino EX",
		es: "M-Heracross EX",
		it: "M Heracross EX",
		pt: "M-Heracross EX",
		de: "M Skaraborn EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 220,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Heracross-EX",
		fr: "Scarhino-EX",
		es: "Heracross-EX",
		it: "Heracross-EX",
		pt: "Heracross-EX",
		de: "Skaraborn-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Big Bang Horn",
				fr: "Corne Big Bang",
				es: "Cornada Big Bang",
				it: "Incornata Big Bang",
				pt: "Chifre Big Bang",
				de: "Urknall-Horn"
			},
			effect: {
				en: "This attack does 180 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 180 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 180 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 180 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 180 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				de: "Dieser Angriff fügt 180 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "180-",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
