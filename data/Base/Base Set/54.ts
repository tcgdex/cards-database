import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Metapod",
		pt: "Metapod",
		fr: "Chrysacier",
		de: "Safcon"
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
		pt: "Caterpie",
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
				pt: "Stiffen",
				fr: "Armure",
				de: "Verhärten"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)",
				pt: "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Chrysacier pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Stun Spore",
				pt: "Stun Spore",
				fr: "Para-spore",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				pt: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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
		fr: "Il est vulnérable aux attaques tant que sa carapace fragile expose son corps tendre et mou."
	}
}

export default card
