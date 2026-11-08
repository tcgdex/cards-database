import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tag Team Boost",
				'fr-fr': "Boost de Groupe",
				'es-es': "Más Juego en Equipo",
				'it-it': "Carica Squadra",
				'pt-br': "Medalha de Impulso",
				'de-de': "Tag-Team-Aufladung"
			},
			effect: {
				'en-us': "If Minun is on your Bench, this attack does 50 more damage.",
				'fr-fr': "Si Négapi est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si Minun está en tu Banca, este ataque hace 50 puntos de daño más.",
				'it-it': "Se Minun è nella tua panchina, questo attacco infligge 50 danni in più.",
				'pt-br': "Se Minun estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn sich Minun auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
		'en-us': "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
	},

	thirdParty: {
		cardmarket: 302171,
		tcgplayer: 146685
	}
}

export default card
