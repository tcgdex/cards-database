import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		de: "Tauros"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Herd",
				fr: "Troupeau Enragé",
				es: "Manada Furiosa",
				it: "Mandria Infuriata",
				pt: "Rebanho Devastador",
				de: "Wütende Herde"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on all of your Tauros and Tauros-GX.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Tauros et Tauros-GX.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en todos tus Tauros y Tauros-GX.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui tuoi Tauros e Tauros-GX.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os seus Tauros e Tauros-GX.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen deinen Tauros und Tauros-GX zu."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 369056,
		tcgplayer: 183918
	}
}

export default card
