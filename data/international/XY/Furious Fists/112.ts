import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "M Heracross EX",
		'fr-fr': "M-Scarhino EX",
		'es-es': "M-Heracross EX",
		'it-it': "M Heracross EX",
		'pt-br': "M-Heracross EX",
		'de-de': "M Skaraborn EX"
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
		'en-us': "Heracross-EX",
		'fr-fr': "Scarhino-EX",
		'es-es': "Heracross-EX",
		'it-it': "Heracross-EX",
		'pt-br': "Heracross-EX",
		'de-de': "Skaraborn-EX"
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
				'en-us': "Big Bang Horn",
				'fr-fr': "Corne Big Bang",
				'es-es': "Cornada Big Bang",
				'it-it': "Incornata Big Bang",
				'pt-br': "Chifre Big Bang",
				'de-de': "Urknall-Horn"
			},
			effect: {
				'en-us': "This attack does 180 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 180 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 180 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 180 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 180 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 180 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
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
	suffix: "EX",

	thirdParty: {
		tcgplayer: 92291
	}
}

export default card
