import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		de: "Safcon",
		it: "Metapod"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		it: "Caterpie"
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
				de: "Verhärten",
				it: "Indurimento"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Chrysacier pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden).",
				it: "Lancia una moneta. Se esce testa, previeni tutti i danni inflitti a Metapod durante il prossimo turno del tuo avversario. (Tutti gli altri effetti degli attacchi restano validi)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
				de: "Stachelspore",
				it: "Paralizzante"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
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
		fr: "Il est vulnérable aux attaques tant que sa carapace fragile expose son corps tendre et mou.",
		it: "È vulnerabile agli attacchi a causa del suo guscio morbido, che non protegge il suo corpo debole e molle. LIV 21 N.11"
	},

	thirdParty: {
		cardmarket: 273749,
		tcgplayer: 42398
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
			cardPath: "data-asia/PMCG/PMCG1/003.ts"
		}
	]
}

export default card
