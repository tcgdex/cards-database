import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'es-es': "Seaking",
		'it-it': "Seaking",
		'pt-br': "Seaking",
		'de-de': "Golking"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'it-it': "Goldeen",
		'pt-br': "Goldeen",
		'de-de': "Goldini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Soaking Horn",
				'fr-fr': "Corne Trempage",
				'es-es': "Cuerno Anegador",
				'it-it': "Inondacorno",
				'pt-br': "Chifre Encharcador",
				'de-de': "Triefendes Horn"
			},
			effect: {
				'en-us': "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata",
				'pt-br': "Carga Indomável",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 40,

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
		'en-us': "It makes its nest by hollowing out boulders in streams with its horn. It defends its eggs with its life.",
	},

	thirdParty: {
		cardmarket: 286274,
		tcgplayer: 107147
	}
}

export default card
