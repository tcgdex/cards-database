import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		fr: "Luxray",
		en: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	illustrator: "Hasuno",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Luxio",
		en: "Luxio"
	},

	attacks: [{
		name: {
			fr: "Razzia Obscure",
			en: "Raid",
			es: "Raid Oscuro",
			it: "Raid",
			pt: "Reide",
			de: "Überfall"
		},

		effect: {
			fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
			es: "Si este Pokémon ha evolucionado de Luxio durante este turno, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon si è evoluto da Luxio durante questo turno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon evoluiu de Luxio durante este turno, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Luxio entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Éclair Frontal",
			en: "Head Bolt",
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
