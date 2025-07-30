import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
		de: "Burmy Sandumhang"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de fer",
				de: "Eisenabwehr"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Burmy Sandy Cloak during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cheniti Cape Sable lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei 'Kopf' verhindere während des nächsten Zuges deines Gegners alle effekte eines Angriffs, einschließlich Schaden, die Burmy Sandumhang zugefügt würden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278103,
		tcgplayer: 84054
	}
}

export default card
