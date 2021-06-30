import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
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
				en: "Tag Team Boost",
				fr: "Boost de Groupe",
				es: "Más Juego en Equipo",
				it: "Carica Squadra",
				pt: "Medalha de Impulso",
				de: "Tag-Team-Aufladung"
			},
			effect: {
				en: "If Minun is on your Bench, this attack does 50 more damage.",
				fr: "Si Négapi est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si Minun está en tu Banca, este ataque hace 50 puntos de daño más.",
				it: "Se Minun è nella tua panchina, questo attacco infligge 50 danni in più.",
				pt: "Se Minun estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn sich Minun auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
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



}

export default card
