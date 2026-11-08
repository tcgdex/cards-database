import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Kangaskhan EX",
		'fr-fr': "Kangourex EX",
		'es-es': "Kangaskhan EX",
		'it-it': "Kangaskhan EX",
		'pt-br': "Kangaskhan EX",
		'de-de': "Kangama EX"
	},

	illustrator: "Ryo Ueda",
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
				'en-us': "Triple Draw",
				'fr-fr': "Triple Pioche",
				'es-es': "Triple Robo",
				'it-it': "Pescata Tripla",
				'pt-br': "Comprada Tripla",
				'de-de': "Dreifachzug"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cards.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kindred Kick",
				'fr-fr': "Coup de Pied à Deux",
				'es-es': "Patada Familiar",
				'it-it': "Calciofamiglia",
				'pt-br': "Chute Parecido",
				'de-de': "Verwandtenkick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
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
		cardmarket: 281561,
		tcgplayer: 91241
	}
}

export default card
