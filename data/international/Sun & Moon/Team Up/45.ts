import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Raid",
				'fr-fr': "Razzia Obscure",
				'es-es': "Raid Oscuro",
				'it-it': "Raid",
				'pt-br': "Reide",
				'de-de': "Überfall"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Blitzle during this turn, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon a évolué de Zébibron pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha evolucionado de Blitzle durante este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon si è evoluto da Blitzle durante questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon evoluiu de Blitzle durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Elezeba entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mach Bolt",
				'fr-fr': "Éclair Fulgurant",
				'es-es': "Rayo Mach",
				'it-it': "Fulmine Mach",
				'pt-br': "Raio Supersônico",
				'de-de': "Flotter Sprung"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
	},

	thirdParty: {
		cardmarket: 368976,
		tcgplayer: 183820
	}
}

export default card
