import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Kangaskhan EX",
		fr: "Kangourex EX",
		es: "Kangaskhan EX",
		it: "Kangaskhan EX",
		pt: "Kangaskhan EX",
		de: "Kangama EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Draw",
				fr: "Triple Pioche",
				es: "Triple Robo",
				it: "Pescata Tripla",
				pt: "Comprada Tripla",
				de: "Dreifachzug"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cards.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Kindred Kick",
				fr: "Coup de Pied à Deux",
				es: "Patada Familiar",
				it: "Calciofamiglia",
				pt: "Chute Parecido",
				de: "Verwandtenkick"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281561
	}
}

export default card
