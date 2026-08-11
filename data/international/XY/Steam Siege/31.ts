import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Razor Shell",
				'fr-fr': "Coquilame",
				'es-es': "Concha Filo",
				'it-it': "Conchilama",
				'pt-br': "Concha Navalha",
				'de-de': "Kalkklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "As a result of strict training, each Dewott learns different forms for using the scalchops.",
	},

	thirdParty: {
		cardmarket: 291566,
		tcgplayer: 121018
	}
}

export default card
