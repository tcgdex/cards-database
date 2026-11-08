import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'fr-fr': "Luxray",
		'en-us': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Hasuno",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Luxio",
		'en-us': "Luxio"
	},

	attacks: [{
		name: {
			'fr-fr': "Razzia Obscure",
			'en-us': "Raid",
			'es-es': "Raid Oscuro",
			'it-it': "Raid",
			'pt-br': "Reide",
			'de-de': "Überfall"
		},

		effect: {
			'fr-fr': "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
			'es-es': "Si este Pokémon ha evolucionado de Luxio durante este turno, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon si è evoluto da Luxio durante questo turno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon evoluiu de Luxio durante este turno, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Luxio entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			'fr-fr': "Éclair Frontal",
			'en-us': "Head Bolt",
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
	regulationMark: "D",


	stage: "Stage2",

	description: {
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539188,
				tcgplayer: 232463
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539188,
				tcgplayer: 232463
			}
		},
	],
}

export default card
