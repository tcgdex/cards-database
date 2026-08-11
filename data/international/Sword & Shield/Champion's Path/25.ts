import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [67],

	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pummel",
				'fr-fr': "Martelage",
				'es-es': "Aporrear",
				'it-it': "Legnata",
				'pt-br': "Esmurrar",
				'de-de': "Trommler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 70 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions."
	},

	thirdParty: {
		cardmarket: 499980,
		tcgplayer: 223018
	}
}

export default card
