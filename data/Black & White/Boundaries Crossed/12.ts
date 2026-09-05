import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		it: "Servine",
		pt: "Servine",
		de: "Efoserp"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		496,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
		de: "Serpifeu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Slash",
				fr: "Double Lame",
				de: "Doppelschlitzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
		de: "Huscht beinahe gleitend über den Boden und täuscht Gegner mit agilen Manövern, bis es mithilfe seiner Efeurute obsiegt."
	},

	thirdParty: {
		cardmarket: 280599,
		tcgplayer: 89078
	}
}

export default card
