import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'de-de': "Golking"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [119],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on Seaking.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Poissoroy.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Golking zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Undulate",
				'fr-fr': "Annulation",
				'de-de': "Auf und Ab"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seaking.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Poissoroy.",
				'de-de': "Wirf eine Münze. Verhindere bei 'Kopf' während des nächstens Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Golking zugefügt werden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89024,
				cardmarket: 275132
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89024,
				cardmarket: 275132
			}
		},
	]
}

export default card
