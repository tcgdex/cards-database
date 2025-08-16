import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
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
		en: "Tangela",
		fr: "Saquedeneu",
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
				en: "Hefty Whip",
				fr: "Fouet Robuste",
				es: "Látigo Contundente",
				it: "Frustata Pesante",
				pt: "Chicote Robusto",
				de: "Deftige Peitsche"
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 130 more damage.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 130 dégâts supplémentaires.",
				es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 130 puntos de daño más.",
				it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 130 danni in più.",
				pt: "Se este Pokémon foi curado durante esta vez de jogar, este ataque causará 130 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 130 Schadenspunkte mehr zu."
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
				en: "Whip Smash",
				fr: "Frappe Fouet",
				es: "Golpe Látigo",
				it: "Frustata Devastante",
				pt: "Chicote Esmagador",
				de: "Peitschenschlag"
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

	thirdParty: {
		cardmarket: 365605,
		tcgplayer: 178799
	}
}

export default card
