import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	illustrator: "Megumi Higuchi",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio",
		de: "Luxio",
		es: "Luxio",
		pt: "Luxio",
		it: "Luxio"
	},

	attacks: [{
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
		cost: ["Lightning"]
	}, {
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça",
			de: "Kopf-Blitz"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	stage: "Stage2",
	dexId: [405],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453453
	}
}

export default card
