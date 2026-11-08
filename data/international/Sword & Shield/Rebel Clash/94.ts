import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Farfetch'd",
		'fr-fr': "Canarticho de Galar",
		'es-es': "Farfetch'd de Galar",
		'it-it': "Farfetch'd di Galar",
		'pt-br': "Farfetch'd de Galar",
		'de-de': "Galar-Porenta"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [83],
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-Roc",
				'es-es': "Golpe Roca",
				'it-it': "Spaccaroccia",
				'pt-br': "Esmagamento de Pedras",
				'de-de': "Zertrümmerer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The Farfetch'd of the Galar region are brave warriors, and they wield thick, tough leeks in battle."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457883,
				tcgplayer: 213182
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457883,
				tcgplayer: 213182
			}
		},
	],
}

export default card
