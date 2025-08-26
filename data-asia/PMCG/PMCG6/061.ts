import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのマチャンプ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 100,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "不屈の精神",
			},
			effect: {
				ja: "GiovanniのMachampが相手の攻撃によってノックアウトされる場合は、コインをひっくり返します。ヘッドの場合、ジョバンニのマチャンプはノックアウトされず、代わりに残りのHPが10になります。ジョバンニのマチャンプがすでに眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ハリケーンパンチ",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
