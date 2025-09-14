import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Raichu",
		fr: "Raichu obscur",
		de: "Dunkles Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Surprise Thunder",
				fr: "Tonnerre surprise",
				de: "Surprise Thunder"
			},
			effect: {
				en: "Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent's Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, lancez une autre pièce. Si la seconde pièce tombe sur face, cette attaque inflige 20 dégâts à chacun des Pokémon du Banc de votre adversaire. Si la seconde pièce tombe sur pile, cette attaque inflige 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent's Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine l'électricité dans son corps, puis la libère sans prévenir afin de surprendre et commotionner tout le monde."
	},

	thirdParty: {
		cardmarket: 274136,
		tcgplayer: 84647
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
