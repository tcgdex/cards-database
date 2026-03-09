import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu",
		it: "Raichu"
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
		en: "Pikachu",
		it: "Pikachu"
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
				en: "Agility",
				fr: "Hâte",
				de: "Agilität",
				it: "Agilità"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégâts, infligés à Raichu.",
				de: "Wirf eine Münze. Bei Kopf verhindere während des nächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Raichu (einschließlich der Schadenspunkte).",
				it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi inflitti a Raichu, compresi i danni."
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
				en: "Thunder",
				fr: "Fatal-Foudre",
				de: "Donner",
				it: "Tuono"
			},
			effect: {
				en: "Flip a coin. If tails, Raichu does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raichu s'inflige 30 dégâts.",
				de: "Wirf eine Münze. Bei Zahl fügt sich Raichu selbst 30 Schadenspunkte zu.",
				it: "Lancia una moneta. Se esce croce, Raichu si infligge 30 danni."
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

	description: {
		fr: "Il doit garder sa queue en contact avec le sol pour éviter toute électrocution.",
		it: "Ha una coda molto lunga che gli serve come messa a terra per proteggersi dalle scariche ad alta tensione che emana dal suo corpo. LIV 40 N.26"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273709,
		tcgplayer: 42354
	}
}

export default card
