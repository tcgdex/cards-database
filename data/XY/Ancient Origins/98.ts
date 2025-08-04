import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Rayquaza EX",
		fr: "M-Rayquaza EX",
		es: "M-Rayquaza EX",
		it: "M Rayquaza EX",
		pt: "M-Rayquaza EX",
		de: "M-Rayquaza EX"
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
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
		es: "Rayquaza-EX",
		it: "Rayquaza-EX",
		pt: "Rayquaza-EX",
		de: "Rayquaza-EX"
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
				en: "Emerald Break",
				fr: "Bris'Émeraude",
				es: "Rotura Esmeralda",
				it: "Colposmeraldo",
				pt: "Quebra Esmeralda",
				de: "Grüner Einschnitt"
			},
			effect: {
				en: "This attack does 30 damage times the number of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
				es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
				it: "Questo attacco infligge 30 danni per ogni Pokémon che hai in panchina.",
				pt: "Este ataque causa 30 de danos vezes o número de Pokémon no seu Banco.",
				de: "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu."
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
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			fr: "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			es: "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			it: "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			pt: "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			de: "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}],

	thirdParty: {
		tcgplayer: 101520
	}
}

export default card
