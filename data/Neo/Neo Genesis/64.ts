import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Demanta",
		de: "Mantax"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Undulate",
				fr: "Annulation",
				de: "Auf und ab"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Mantine.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Demanta.",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ während des nächsten gegnerischen Zugs alle Auswirkungen von Angriffen auf Mantax (einschließlich der Schadenspunkte)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Swimming freely in open seas, it may fly out of the water and over the waves if it builds up enough speed.",
		fr: "Nageant librement en pleine mer, il peut s'envoler hors de l'eau et par-dessus les vagues s'il prend suffisamment de vitesse.",
		de: "Während es frei im offenen Ozean schwimmt, kann es aus dem Wasser und über die Wellen fliegen, falls es genügend Geschwindigkeit entwickelt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274464,
				tcgplayer: 87179
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274464,
				tcgplayer: 87179
			}
		}
	]
}

export default card
