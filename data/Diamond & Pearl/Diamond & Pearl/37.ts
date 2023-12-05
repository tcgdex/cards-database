import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
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
				en: "Block",
				fr: "Barrage",
				de: "Rückentzug"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ease Up",
				fr: "Se détendre",
				de: "Entspannungsangriff"
			},
			effect: {
				en: "Snorlax is now Asleep. If Snorlax is evolved from Munchlax, this attack does 40 damage plus 30 more damage.",
				fr: "Ronflex est maintenant Endormi. Si Ronflex évolue en Goinfrex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				de: "Relaxo schläft jetzt. Wenn Relaxo sich aus Mampfaxo entwickelt hat, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 4,

	description: {
		fr: "Son estomac peut digérer n'importe quel type de nourriture, même quand elle est moisie ou pourrie."
	}
}

export default card
