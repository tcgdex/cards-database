import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electricounter",
				'fr-fr': "Contre-Élek",
				'es-es': "Contraataque Eléctrico",
				'it-it': "Contrelettro",
				'pt-br': "Contador de Eletricidade",
				'de-de': "Elektrokonter"
			},
			effect: {
				'en-us': "This attack does 40 damage times the number of Prize cards your opponent has taken.",
				'fr-fr': "Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Récompense que votre adversaire a récupérées.",
				'es-es': "Este ataque hace 40 puntos de daño por cada carta de Premio que tu rival haya cogido.",
				'it-it': "Questo attacco infligge 40 danni per ogni carta Premio presa dal tuo avversario.",
				'pt-br': "Esse ataque causa 40 de danos vezes o número de cards de Prêmio recebidos por seu oponente.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte für jede Preiskarte zu, die dein Gegner bereits genommen hat."
			},
			damage: "40×",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its claws loose electricity with enough amperage to cause fainting. They live in small groups.",
	},

	thirdParty: {
		cardmarket: 281516,
		tcgplayer: 91166
	}
}

export default card
