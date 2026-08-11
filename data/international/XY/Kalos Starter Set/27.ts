import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'it-it': "Miltank",
		'pt-br': "Miltank",
		'de-de': "Miltank"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sitdown Splash",
				'fr-fr': "Grosse Éclaboussure",
				'es-es': "Chapoteo Sentado",
				'it-it': "Sedutasplash",
				'pt-br': "Respingo Arriante",
				'de-de': "Platzierter Platscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it is around babies, it milk it produces contains much more nutrition than usual.",
	},

	thirdParty: {
		cardmarket: 281293,
		tcgplayer: 87468
	}
}

export default card
