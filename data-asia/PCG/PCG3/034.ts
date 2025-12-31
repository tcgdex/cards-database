import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークオクタリリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [224],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "黒い吸引カップ",
			},
			effect: {
				ja: "防御する各ポケモンに10ダメージを与えます。コインをひっくり返します。頭の場合、防御する各ポケモンは現在麻痺しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "インクブラスト",
			},
			effect: {
				ja: "30のダメージに加えて、ダークオクリリーに取り付けられた各エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
