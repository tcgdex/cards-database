import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [688],

	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
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
				'en-us': "Dual Chop",
				'fr-fr': "Double Baffe",
				'es-es': "Golpe Bis",
				'it-it': "Doppiocolpo",
				'pt-br': "Pancada Dupla",
				'de-de': "Doppelhieb"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
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


	stage: "Basic",

	description: {
		'en-us': "After two Binacle find a suitably sized rock, they adhere themselves to it and live together. They cooperate to gather food during high tide."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457928,
				tcgplayer: 213191
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457928,
				tcgplayer: 213191
			}
		},
	],
}

export default card
