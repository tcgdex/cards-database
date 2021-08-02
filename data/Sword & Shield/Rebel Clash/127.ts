import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar",
		es: "Perrserker de Galar",
		it: "Perrserker di Galar",
		pt: "Perrserker de Galar",
		de: "Galar-Mauzinger"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Claw Dagger",
				fr: "Griffe Dague",
				es: "Puñal Garras",
				it: "Dagartiglio",
				pt: "Garra de Adaga",
				de: "Klauendolch"
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
