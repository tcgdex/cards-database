import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [305],

	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid",
		'es-es': "Aron",
		'it-it': "Aron",
		'pt-br': "Aron",
		'de-de': "Stollunior"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'es-es': "Derribar",
				'it-it': "Scaraventa",
				'pt-br': "Jogar Longe",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'es-es': "Arremeter",
				'it-it': "Affondo Lungo",
				'pt-br': "Bote",
				'de-de': "Sprungangriff"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It habitually shows off its strength with the sparks it creates by ramming its steel body into boulders."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483489,
				tcgplayer: 219380
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483489,
				tcgplayer: 219380
			}
		},
	],
}

export default card
