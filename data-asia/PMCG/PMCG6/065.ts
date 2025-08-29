import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのタウロス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [128],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "3張りの尾",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "全速度充電",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ディフェンディングポケモンへのヘッド数が20倍になり、ブレインのタウロスの数が20回ダメージします。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
