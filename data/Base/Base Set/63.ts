import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy",
		it: "Squirtle"
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
				en: "Bubble",
				fr: "Écume",
				de: "Blubber",
				it: "Bolla"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli",
				de: "Panzerschutz",
				it: "Ritirata"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carapuce pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Bei 'Kopf' verhindere allen Schaden, der Schiggy während des nächsten Zugs Deines Gegners zugefühgt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a Squirtle durante il prossimo turno del tuo avversario. (Tutti gli altri effetti degli attacchi restano validi.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume.",
		it: "Dopo la nascita, il suo dorso si gonfia e si indurisce in un guscio. Sprizza potenti schizzi di schiuma dalla bocca. LIV 8 N.7"
	},

	thirdParty: {
		cardmarket: 273758,
		tcgplayer: 42408
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
