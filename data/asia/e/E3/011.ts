import { Card } from "models/database/card"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Victreebel",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [71],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "フレグランストラップ",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、対戦相手のベンチポクモンの1つを選択し、防御するポクモンをそれで切り替えます。 Victreebelが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "腐食性酸",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "unlimited",
		}, {
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
