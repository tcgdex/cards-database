import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Yungoos",
		fr: "Manglouton",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		734,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scout",
				fr: "Espionnage",
				es: "Explorar",
				it: "Esplorazione",
				pt: "Explorador",
				de: "Späher"
			},
			effect: {
				en: "Your opponent reveals their hand.",
				fr: "Votre adversaire dévoile sa main.",
				es: "Tu rival enseña las cartas de su mano.",
				it: "Il tuo avversario mostra le carte che ha in mano.",
				pt: "Seu oponente revela a própria mão.",
				de: "Dein Gegner zeigt dir seine Handkarten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				es: "Derribo",
				it: "Riduttore",
				pt: "Desmantelar",
				de: "Bodycheck"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige 10 dégâts.",
				es: "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 10 danni a se stesso.",
				pt: "Este Pokémon causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
