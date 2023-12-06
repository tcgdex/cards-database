import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		de: "Togetic"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chase Up",
				fr: "Relancer",
				de: "Dampf machen"
			},
			effect: {
				en: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
				de: "Fliegen"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to Togetic during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques (y compris les dégâts) infligés à Togetic pendant le prochain tour de votre adversaire.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die Togetic zugefügt werden."
			},
			damage: 30,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It grows dispirited if it is not with kind people. It can float in midair without moving its wings."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
