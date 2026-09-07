import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'de-de': "Schiggy",
		'it-it': "Squirtle"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 40,

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
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Blubber",
				'it-it': "Bolla"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Withdraw",
				'fr-fr': "Repli",
				'de-de': "Panzerschutz",
				'it-it': "Ritirata"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carapuce pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Schiggy während des nächsten Zugs Deines Gegners zugefühgt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a Squirtle durante il prossimo turno del tuo avversario. (Tutti gli altri effetti degli attacchi restano validi.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.",
		'fr-fr': "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume.",
		'it-it': "Dopo la nascita, il suo dorso si gonfia e si indurisce in un guscio. Sprizza potenti schizzi di schiuma dalla bocca. LIV 8 N.7"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273758,
				tcgplayer: 42408
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107060
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107060
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
