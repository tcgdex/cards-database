import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Emboar",
		fr: "Roitiflam",
		es: "Emboar",
		it: "Emboar",
		pt: "Emboar",
		de: "Flambirex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		500,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
		de: "Ferkokel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
				fr: "Souffle-Feu",
				de: "Feuerhauch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				de: "Feuersturm"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
		de: "Es trägt einen Backenbart aus Feuer und beherrscht Kampftechniken, die ebenso wuchtig wie schnell sind."
	},

	thirdParty: {
		cardmarket: 280613,
		tcgplayer: 85185
	}
}

export default card
