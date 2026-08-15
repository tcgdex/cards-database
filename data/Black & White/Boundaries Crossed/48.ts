import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Keldeo",
		fr: "Keldeo",
		es: "Keldeo",
		it: "Keldeo",
		pt: "Keldeo",
		de: "Keldeo"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		647,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte Secrète",
				de: "Aufwärtsstoß"
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
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Kick",
				fr: "Pied Hydro",
				de: "Hydrokick"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "By blasting water from its hooves, it can glide across water. It excels at using leg moves while battling.",
		de: "Gleitet über das Wasser, indem es seine Hufe als Wasserdüsen nutzt. Seine Beintechnik verschafft ihm im Kampf Vorteile."
	},

	thirdParty: {
		cardmarket: 280634,
		tcgplayer: 86434
	}
}

export default card
