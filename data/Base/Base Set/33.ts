import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		de: "Kokuna"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stiffen",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Coconfort pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Kokuna während des nächsten Zugs Deines Gegners zugefüght wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet."
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

	description: {
		fr: "Incapable de se déplacer de lui-même, il se défend en durcissant sa carapace."
	},

	thirdParty: {
		cardmarket: 273728,
		tcgplayer: 42375
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
