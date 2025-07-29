import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
		de: "Anorith"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Claw Fossil",
		fr: "Klauenfossil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de garde",
				de: "Abwehrklaue"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Anorith by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Anorith par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Anorith durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
				de: "Kreuzschere"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Un ancêtre Pokémon réanimé à partir d'un fossile. Il vivait en mer et chassait avec ses pinces."
	},

	thirdParty: {
		cardmarket: 278195
	}
}

export default card
