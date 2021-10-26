import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		it: "Luxio",
		pt: "Luxio",
		de: "Luxio"
	},

	attacks: [
		{
			cost: [
				"Lightning",
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
				en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
				fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Si este Pokémon ha evolucionado de Luxio durante este turno, este ataque hace 100 puntos de daño más.",
				it: "Se questo Pokémon si è evoluto da Luxio durante questo turno, questo attacco infligge 100 danni in più.",
				pt: "Se este Pokémon evoluiu de Luxio durante este turno, este ataque causará 100 pontos de dano a mais.",
				de: "Wenn sich dieses Pokémon während dieses Zuges aus Luxio entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Raio de Cabeça",
				de: "Kopf-Blitz"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 160,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	}
}

export default card
