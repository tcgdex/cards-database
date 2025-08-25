import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Teddiursa",
		fr: "Teddiursa",
		de: "Teddiursa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		216,
	],

	hp: 50,

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
				en: "Fake Tears",
				fr: "Croco Larme",
				de: "Trugträne"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn, and any damage done to Teddiursa by attacks is reduced by 30 (after applying weakness and resistance).",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes\nDresseur de sa main lors de son prochain tour, et tous les dégâts infligés à Teddiursa par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				de: "Wirf eine Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Trainerkarten von seiner Hand spielen und Schaden, der Teddiursa durch Angriffe zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 279716,
		tcgplayer: 89860
	}
}

export default card
