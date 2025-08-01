import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
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
		en: "Blitzle",
		fr: "Zébibron",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure",
				es: "Raid Oscuro",
				it: "Raid",
				pt: "Reide",
				de: "Überfall"
			},
			effect: {
				en: "If this Pokémon evolved from Blitzle during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué de Zébibron pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si este Pokémon ha evolucionado de Blitzle durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se questo Pokémon si è evoluto da Blitzle durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se este Pokémon evoluiu de Blitzle durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Elezeba entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
				en: "Mach Bolt",
				fr: "Éclair Fulgurant",
				es: "Rayo Mach",
				it: "Fulmine Mach",
				pt: "Raio Supersônico",
				de: "Flotter Sprung"
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

	thirdParty: {
		cardmarket: 368976
	}
}

export default card
