import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'de-de': "Luxio",
		'es-es': "Luxio",
		'pt-br': "Luxio",
		'it-it': "Luxio"
	},

	attacks: [{
		name: {
			'en-us': "Raid",
			'fr-fr': "Razzia Obscure",
			'es-es': "Raid Oscuro",
			'it-it': "Raid",
			'pt-br': "Reide",
			'de-de': "Überfall"
		},

		effect: {
			'en-us': "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
			'fr-fr': "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha evolucionado de Luxio durante este turno, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon si è evoluto da Luxio durante questo turno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon evoluiu de Luxio durante este turno, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Luxio entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
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
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger."
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
