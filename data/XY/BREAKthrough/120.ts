import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "High Flight",
				fr: "Haute Voltige",
			},
			effect: {
				en: "Each player reveals his or her hand. This attack does 20 damage times the number of Item cards revealed.",
				fr: "Chaque joueur montre sa main. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Objet montrées.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
				fr: "Plongée Rapide",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
