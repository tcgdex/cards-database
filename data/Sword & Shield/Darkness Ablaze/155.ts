import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Pikser"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				es: "Ataque Furia",
				it: "Furia",
				pt: "Ataque de Fúria",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Smart enough to use tools in battle, these Pokémon have been seen picking up rocks and flinging them or using ropes to wrap up enemies."
	}
}

export default card
