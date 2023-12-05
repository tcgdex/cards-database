import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},
	illustrator: "Saya　Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		79,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
				de: "Ruhe"
			},
			effect: {
				en: "Remove all Special Conditions and 3 damage counters from Slowpoke. Slowpoke is now Asleep.",
				fr: "Retirez à Ramoloss tous ses États Spéciaux et 3 marqueurs de dégât. Ramoloss est maintenant Endormi.",
				de: "Entferne alle Speziellen Zustände und 3 Schadensmarken von Flegmon. Flegmon schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tumble Over",
				fr: "Culbuter",
				de: "Umkippen"
			},
			effect: {
				en: "Slowpoke can't attack during your next turn.",
				fr: "Ramoloss ne peut pas attaquer lors de votre prochain tour.",
				de: "Flegmon kann in deinem nächsten Zug nicht angreifen."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
