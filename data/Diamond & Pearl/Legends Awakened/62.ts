import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Luxio",
		fr: "Luxio",
		de: "Luxio"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		404,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Shinx",
		fr: "Sheinux",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Spark",
				fr: "Étincelle",
				de: "Funkensprung"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Claw",
				fr: "Griffe-tonnerre",
				de: "Donnerklaue"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Lightning Energy attached to Luxio.",
				fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à Luxio.",
				de: "Wirf 1 Münze. Bei \"Zahl\" entferne alle -Energien, die an Luxio angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "L'électricité libérée par ses griffes peut assommer l'ennemi. Il vit en petits groupes."
	},

	thirdParty: {
		cardmarket: 278211,
		tcgplayer: 86940
	}
}

export default card
