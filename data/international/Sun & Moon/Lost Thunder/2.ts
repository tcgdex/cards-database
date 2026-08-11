import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hefty Whip",
				'fr-fr': "Fouet Robuste",
				'es-es': "Látigo Contundente",
				'it-it': "Frustata Pesante",
				'pt-br': "Chicote Robusto",
				'de-de': "Deftige Peitsche"
			},
			effect: {
				'en-us': "If this Pokémon was healed during this turn, this attack does 130 more damage.",
				'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 130 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 130 puntos de daño más.",
				'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 130 danni in più.",
				'pt-br': "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 130 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 130 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whip Smash",
				'fr-fr': "Frappe Fouet",
				'es-es': "Golpe Látigo",
				'it-it': "Frustata Devastante",
				'pt-br': "Chicote Esmagador",
				'de-de': "Peitschenschlag"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
	},

	thirdParty: {
		cardmarket: 365605,
		tcgplayer: 178799
	}
}

export default card
