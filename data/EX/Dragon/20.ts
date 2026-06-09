import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
		de: "Draschel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bagon",
		fr: "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrunch",
				fr: "Compresse",
				de: "Scrunch"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Drackhaus lors du prochain tour de votre adversaire. (Tous les autres effets sont appliqués.)",
				de: "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque qui roule",
				de: "Rolling Attack"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 89122,
		cardmarket: 275897
	}
}

export default card
