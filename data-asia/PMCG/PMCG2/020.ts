import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "フレアロン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 70,
	types: ["Fire"],
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
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "火炎放射器",
			},
			effect: {
				ja: "Flareonに取り付けられた1つのファイアエネルギーカードを廃棄すると、この攻撃は何もしません。",
			},
			damage: 60,
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
