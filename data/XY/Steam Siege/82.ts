import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Xerneas BREAK",
		fr: "Xerneas TURBO",
		es: "Xerneas TURBO",
		it: "Xerneas TURBO",
		pt: "Xerneas TURBO",
		de: "Xerneas-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 150,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Life Stream",
				fr: "Flux Vital",
				es: "Flujo de Vida",
				it: "Flusso Creativo",
				pt: "Fluxo de Vida",
				de: "Strom des Lebens"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 de danos vezes a quantidade de Energia ligada a todos os seus Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jede an deine Pokémon angelegte Energie zu."
			},
			damage: "20×",

		}
	],

	retreat: 0
}

export default card
