import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pressurized Gas",
				fr: "Gaz pressurisé",
				de: "Treibgas"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
				fr: "Lance roquette",
				de: "Raketenstart"
			},
			effect: {
				en: "Pupitar does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Pupitar by attacks during your opponent's next turn.",
				fr: "Ymphect s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les effets infligés à Ymphect par des attaques lors du prochain tour de votre adversaire.",
				de: "Pupitar fügt sich selbst 10 Schadenspunkte zu. Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der Pupitar im nächsten Zug deines Gegners durch Angriffe zugefügt wird."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		fr: "Son corps est dur comme la pierre souterraine. Il file comme une fusée en expulsant des gaz."
	},

	thirdParty: {
		cardmarket: 277688
	}
}

export default card
