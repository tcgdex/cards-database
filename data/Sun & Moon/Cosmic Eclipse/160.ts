import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
		es: "Jangmo-o",
		it: "Jangmo-o",
		pt: "Jangmo-o",
		de: "Miniras"
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		782,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Fighting",
			],
			name: {
				en: "Raging Claws",
				fr: "Griffes Enragées",
				es: "Garras Furiosas",
				it: "Furiartigli",
				pt: "Garras Devastadoras",
				de: "Wutklauen"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
