import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エリカのウツドン",
	},
	illustrator: "Atsuko Nishida",

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [70],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "よだれ",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "FlyTrap",
			},
			effect: {
				'ja-jp': "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、アクティブなポケモンで切り替えます。対戦相手にベンチポケモンがない場合、この攻撃は使用できません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576797
			},
		},
	],
};

export default card
