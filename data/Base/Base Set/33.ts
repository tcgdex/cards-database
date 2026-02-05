import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Kakuna",
		fr: "Coconfort",
		de: "Kokuna",
		it: "Kakuna"
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
		it: "Weedle"
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
				de: "Härtner",
				it: "Indurimento"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Coconfort pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Kokuna während des nächsten Zugs Deines Gegners zugefüght wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt).",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a Kakuna durante il prossimo turno del tuo avversario. (Tutti gli altri effetti degli attacchi restano validi.)"
				
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
				de: "Giftpuder",
				it: "Velenpolvere"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato."
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
		fr: "Incapable de se déplacer de lui-même, il se défend en durcissant sa carapace.",
		it: "Dato che non ha molta libertà di movimento, questo Pokémon può proteggersi contro i predatori solo indurendo la sua corazza. LIV 23 N.14"
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

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/009.ts"
		}
	]
}

export default card
