import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gastrodon East Sea",
		fr: "Tritosor Mer Orient",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		423,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellos East Sea",
		fr: "Sancoki Mer Orient",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Osmosis",
				fr: "Pression osmose",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have Gastrodon West Sea in play, you may move up to 3 damage counters from Gastrodon East Sea to 1 of your Gastrodon West Sea.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez Tritosor Mer Occident\n en jeu, vous pouvez déplacer jusqu'à 3 marqueurs de dégât de Tritosor Mer Orient\n sur 1 de vos Tritosor Mer Occident\n.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague diminutrice",
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on Gastrodon East Sea.",
				fr: "Inflige 80 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Tritosor Mer Orient.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
