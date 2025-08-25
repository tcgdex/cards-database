import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		634,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d’Boule",
				es: "Golpe Cabeza",
				it: "Bottintesta",
				pt: "Cabeçada",
				de: "Kopfnuss"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Double Hit",
				fr: "Coup Double",
				es: "Doble Golpe",
				it: "Doppiosmash",
				pt: "Golpe Duplo",
				de: "Doppelschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 311910,
		tcgplayer: 149084
	}
}

export default card
