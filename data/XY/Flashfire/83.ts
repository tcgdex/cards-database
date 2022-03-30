import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 100,
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
				en: "Powerful Friends",
				fr: "Force de l'Amitié",
				es: "Amigos Poderosos",
				it: "Spallecoperte",
				pt: "Amigos Poderosos",
				de: "Einflussreiche Freunde"
			},
			effect: {
				en: "If you have any Stage 2 Pokémon on your Bench, this attack does 70 more damage.",
				fr: "Si vous avez un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si tienes algún Pokémon de Fase 2 en tu Banca, este ataque hace 70 puntos de daño más.",
				it: "Se hai dei Pokémon di Fase 2 in panchina, questo attacco infligge 70 danni in più.",
				pt: "Se você tiver qualquer Pokémon Estágio 2 no Banco, este ataque causará 70 de danos adicionais.",
				de: "Wenn du mindestens 1 Phase-2-Pokémon auf deiner Bank hast, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
