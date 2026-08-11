import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ライトジョルテオン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "パルスガード",
			},
			effect: {
				ja: "対戦相手の次のターン中に、照明ジョルテオンに30回以上のダメージが与えられたとき（脱力感と抵抗を適用した後）、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "雷の針",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンが麻痺しています。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
