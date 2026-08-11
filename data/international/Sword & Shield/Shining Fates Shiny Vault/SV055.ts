import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [857],
	set: Set,

	name: {
		'fr-fr': "Chapotus",
		'en-us': "Hattrem",
		'es-es': "Hattrem",
		'it-it': "Hattrem",
		'pt-br': "Hattrem",
		'de-de': "Brimano"
	},

	illustrator: "Lee HyunJung",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Bibichut",
		'en-us': "Hatenna"
	},

	attacks: [{
		name: {
			'fr-fr': "Plénitude",
			'en-us': "Calm Mind",
			'es-es': "Paz Mental",
			'it-it': "Calmamente",
			'pt-br': "Mente Calma",
			'de-de': "Gedankengut"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Centrifugifle",
			'en-us': "Brutal Swing",
			'es-es': "Giro Vil",
			'it-it': "Vorticolpo",
			'pt-br': "Balanço Violento",
			'de-de': "Wirbler"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "No matter who you are, if you bring strong emotions near this Pokémon, it will silence you violently."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539663,
				tcgplayer: 232420
			}
		},
	],
}

export default card
