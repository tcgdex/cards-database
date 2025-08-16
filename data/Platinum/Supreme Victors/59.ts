import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Healing Scale",
				fr: "Écaille guérisseuse",
				de: "Heilschuppe"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von jedem deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tombe de sable",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278750
	}
}

export default card
