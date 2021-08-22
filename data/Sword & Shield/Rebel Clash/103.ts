import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Binacle",
		fr: "Opermine",
		es: "Binacle",
		it: "Binacle",
		pt: "Binacle",
		de: "Bithora"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe",
				es: "Golpe Bis",
				it: "Doppiocolpo",
				pt: "Pancada Dupla",
				de: "Doppelhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "After two Binacle find a suitably sized rock, they adhere themselves to it and live together. They cooperate to gather food during high tide."
	}
}

export default card
