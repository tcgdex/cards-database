import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "サンフロラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [192],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "花びらのダンス",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 Sunfloraは現在混乱しています（ダメージを受けた後）。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
