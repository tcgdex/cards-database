import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Chesnaught",
		'fr-fr': "Blindépique",
		'es-es': "Chesnaught",
		'it-it': "Chesnaught",
		'pt-br': "Chesnaught",
		'de-de': "Brigaron"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle Arm",
				'fr-fr': "Poing Dard",
				'es-es': "Brazo Pincho",
				'it-it': "Pugnospine",
				'pt-br': "Braço de Agulha",
				'de-de': "Nietenranke"
			},

			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumbling Attack",
				'fr-fr': "Attaque Trébuchante",
				'es-es': "Ataque Tambaleante",
				'it-it': "Attacco Capriola",
				'pt-br': "Ataque Cambalhota",
				'de-de': "Taumler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its Tackle is forceful enough to flip a 50-ton tank. It shields its allies from danger with its own body.",
	},

	thirdParty: {
		cardmarket: 281271,
		tcgplayer: 84268
	}
}

export default card
