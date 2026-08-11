import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "M Rayquaza EX",
		'fr-fr': "M-Rayquaza EX",
		'es-es': "M-Rayquaza EX",
		'it-it': "M Rayquaza EX",
		'pt-br': "M-Rayquaza EX",
		'de-de': "M-Rayquaza EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 220,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rayquaza-EX",
		'fr-fr': "Rayquaza-EX",
		'es-es': "Rayquaza-EX",
		'it-it': "Rayquaza-EX",
		'pt-br': "Rayquaza-EX",
		'de-de': "Rayquaza-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Emerald Break",
				'fr-fr': "Bris'Émeraude",
				'es-es': "Rotura Esmeralda",
				'it-it': "Colposmeraldo",
				'pt-br': "Quebra Esmeralda",
				'de-de': "Grüner Einschnitt"
			},
			effect: {
				'en-us': "This attack does 30 damage times the number of your Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
				'it-it': "Questo attacco infligge 30 danni per ogni Pokémon che hai in panchina.",
				'pt-br': "Este ataque causa 30 de danos vezes o número de Pokémon no seu Banco.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
			},
			damage: "30×",

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			'fr-fr': "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			'es-es': "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			'it-it': "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			'pt-br': "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			'de-de': "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 284279,
		tcgplayer: 101520
	}
}

export default card
