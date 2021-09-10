import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Solosis",
		fr: "Nucléos",
		es: "Solosis",
		it: "Solosis",
		pt: "Solosis",
		de: "Monozyto"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		577,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mini Link",
				fr: "Mini Lien",
				es: "Miniconexión",
				it: "Minilegame",
				pt: "Miniconexão",
				de: "Miniband"
			},
			effect: {
				en: "If Solosis is on your Bench, this attack does 30 more damage.",
				fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si Solosis está en tu Banca, este ataque hace 30 puntos de daño más.",
				it: "Se Solosis è nella tua panchina, questo attacco infligge 30 danni in più.",
				pt: "Se Solosis estiver no seu Banco, este ataque causará 30 de danos adicionais.",
				de: "Wenn sich Monozyto auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
