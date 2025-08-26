import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョルテオン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [135],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クイック攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},

		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "ピンミサイル",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
