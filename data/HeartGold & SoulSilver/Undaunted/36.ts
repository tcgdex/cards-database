import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insecateur",
		de: "Sichlor"
	},

	illustrator: "Wataru Kawahara/Direc. Shinji Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Afterimage Strike",
				fr: "Frap’Invisible",
				de: "Nachbild-Angriff"
			},
			effect: {
				en: "During your opponent’s next turn, if Scyther would be damaged by an attack, flip a coin. If heads, prevent that attack’s damage done to Scyther.",
				fr: "Pendant le prochain tour de votre adversaire, si Insécateur doit subir les dégâts d’une attaque, lancez une pièce. Si c’est face, Insécateur ne subit pas les",
				de: "Wenn Sichlor während des nächsten Zuges deines Gegners durch einen Angriff Schaden zugefügt würde, wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff Sichlor keinen Schaden zu."
			},
			damage: 20,

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
		en: "When it moves, it leaves only a blur. If it hides in grass, its protective colors make it invisible."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
