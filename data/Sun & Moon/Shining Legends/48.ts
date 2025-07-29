import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap’Keu",
				es: "Coleada",
				it: "Mano-Coda",
				pt: "Batida de Cauda",
				de: "Schweifklopfen"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 302186
	}
}

export default card
