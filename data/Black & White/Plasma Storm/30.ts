import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		271,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot",
		de: "Loturzel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump On",
				fr: "Saut",
				de: "Draufspringen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				de: "Wellenplatscher"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere.",
		de: "Es hat ein spitzbübisches Wesen. Sieht es einen Angler, zieht es an der Angelschnur, um ihn zu ärgern."
	},

	thirdParty: {
		cardmarket: 280770,
		tcgplayer: 86821
	}
}

export default card
