import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "vileplume",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "毒花粉",
			},
			effect: {
				'ja-jp': "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合、防御ポケモンは現在毒されています。 vileplumeが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "花びらのダンス",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 vileplumeは混乱しています。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
