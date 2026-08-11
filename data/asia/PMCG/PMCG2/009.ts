import { Card } from "models/database/card"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クサイハナ",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "毒パウダー",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},

		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "ファウル臭",
			},
			effect: {
				'ja-jp': "防御するポケモンと暗闇の両方が混乱しています（ダメージを与えた後）。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576620
			},
		},
	],
};

export default card
