import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Strike of Enlightenment",
				'fr-fr': "Frappe Révélatrice",
				'es-es': "Golpe de Iluminación",
				'it-it': "Colpo di Illuminazione",
				'pt-br': "Golpe de Esclarecimento",
				'de-de': "Schlag der Erleuchtung"
			},
			effect: {
				'en-us': "If this Pokémon’s remaining HP is 30 or less, this attack does 160 more damage.",
				'fr-fr': "S’il reste 30 PV ou moins à ce Pokémon, cette attaque inflige 160 dégâts supplémentaires.",
				'es-es': "Si a este Pokémon le quedan 30 PS o menos, este ataque hace 160 puntos de daño más.",
				'it-it': "Se i PS rimanenti di questo Pokémon sono 30 o meno, questo attacco infligge 160 danni in più.",
				'pt-br': "Se o PS restante deste Pokémon for 30 ou menos, este ataque causará 160 pontos de dano a mais.",
				'de-de': "Wenn die verbleibenden KP dieses Pokémon 30 oder weniger betragen, fügt diese Attacke 160 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Spinning Kick",
				'fr-fr': "Coup Tournant",
				'es-es': "Patada Giratoria",
				'it-it': "Calcio Rotante",
				'pt-br': "Chute Giratório",
				'de-de': "Wirbelkick"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Through yoga training, it gained the psychic power to predict its foe's next move.",
	},

	thirdParty: {
		cardmarket: 361322,
		tcgplayer: 170899
	}
}

export default card
