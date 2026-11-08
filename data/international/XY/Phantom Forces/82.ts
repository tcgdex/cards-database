import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig",
		'es-es': "Girafarig",
		'it-it': "Girafarig",
		'pt-br': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psybite",
				'fr-fr': "Morsure Psy",
				'es-es': "Psicomordisco",
				'it-it': "Psicomorso",
				'pt-br': "Mordida Psíquica",
				'de-de': "Psibiss"
			},
			effect: {
				'en-us': "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 30 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Psychic ligada a ele, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "While it sleeps, the head of its tail keeps watch. The tail doesn't need to sleep.",
	},

	thirdParty: {
		cardmarket: 281888,
		tcgplayer: 94650
	}
}

export default card
