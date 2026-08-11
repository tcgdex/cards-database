import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu",
		'it-it': "Raichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'it-it': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'de-de': "Agilität",
				'it-it': "Agilità"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégâts, infligés à Raichu.",
				'de-de': "Wirf eine Münze. Bei Kopf verhindere während des nächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Raichu (einschließlich der Schadenspunkte).",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi inflitti a Raichu, compresi i danni."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre",
				'de-de': "Donner",
				'it-it': "Tuono"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Raichu does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Raichu s'inflige 30 dégâts.",
				'de-de': "Wirf eine Münze. Bei Zahl fügt sich Raichu selbst 30 Schadenspunkte zu.",
				'it-it': "Lancia una moneta. Se esce croce, Raichu si infligge 30 danni."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its long tail serves as a ground to protect itself from its own high-voltage power.",
		'fr-fr': "Il doit garder sa queue en contact avec le sol pour éviter toute électrocution.",
		'it-it': "Ha una coda molto lunga che gli serve come messa a terra per proteggersi dalle scariche ad alta tensione che emana dal suo corpo. LIV 40 N.26"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273709,
				tcgplayer: 42354
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107009
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107009
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
