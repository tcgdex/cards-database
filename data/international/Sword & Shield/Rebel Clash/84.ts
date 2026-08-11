import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Hattrem",
		'fr-fr': "Chapotus",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [857],
	set: Set,

	evolveFrom: {
		'en-us': "Hatenna",
		'fr-fr': "Bibichut",
		'es-es': "Hatenna",
		'it-it': "Hatenna",
		'pt-br': "Hatenna",
		'de-de': "Brimova"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Calm Mind",
				'fr-fr': "Plénitude",
				'es-es': "Paz Mental",
				'it-it': "Calmamente",
				'pt-br': "Mente Calma",
				'de-de': "Gedankengut"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brutal Swing",
				'fr-fr': "Centrifugifle",
				'es-es': "Giro Vil",
				'it-it': "Vorticolpo",
				'pt-br': "Balanço Violento",
				'de-de': "Wirbler"
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
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "No matter who you are, if you bring strong emotions near this Pokémon, it will silence you violently."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457838,
				tcgplayer: 213170
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457838,
				tcgplayer: 213170
			}
		},
	],
}

export default card
