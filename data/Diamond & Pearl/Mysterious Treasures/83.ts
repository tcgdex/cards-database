import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Finneon",
		fr: "Ecayon",
		de: "Finneon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		456,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Elegant Swim",
				fr: "Nage élégante",
				de: "Elegantes Schwimmen"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Finneon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Ecayon lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Finneon zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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

	description: {
		fr: "Après une longue exposition au soleil, les motifs de ses nageoires caudales luisent à la nuit tombée."
	},

	thirdParty: {
		cardmarket: 277712,
		tcgplayer: 85449
	}
}

export default card
