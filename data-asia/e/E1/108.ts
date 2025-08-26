import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラストワーズ-108/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [9],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ジェットストリーム",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、BlastoiseがアクティブなPokmonである場合、コインをひっくり返すことができます。頭の場合は、爆風に取り付けられたエネルギーカードを捨ててください。次に、防衛ポクモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。爆風が特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "エネルギー大砲",
			},
			effect: {
				ja: "40のダメージに加えて、爆風に付着した各エネルギーのダメージがさらに10件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
