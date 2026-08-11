import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'de-de': "Kokuna",
		'it-it': "Kakuna"
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
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'it-it': "Weedle"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stiffen",
				'fr-fr': "Armure",
				'de-de': "Härtner",
				'it-it': "Indurimento"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Coconfort pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Kokuna während des nächsten Zugs Deines Gegners zugefüght wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt).",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a Kakuna durante il prossimo turno del tuo avversario. (Tutti gli altri effetti degli attacchi restano validi.)"

			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder",
				'it-it': "Velenpolvere"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato."
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
	retreat: 2,


	description: {
		'en-us': "Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.",
		'fr-fr': "Incapable de se déplacer de lui-même, il se défend en durcissant sa carapace.",
		'it-it': "Dato che non ha molta libertà di movimento, questo Pokémon può proteggersi contro i predatori solo indurendo la sua corazza. LIV 23 N.14"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273728,
				tcgplayer: 42375
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107030
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107030
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
