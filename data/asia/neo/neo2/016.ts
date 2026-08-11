import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "PoliWhirl",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [61],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "腹ドラム",
			},
			effect: {
				ja: "PoliWhirlに3つのダメージカウンターを置きます。これがPoliWhirlをノックアウトしない場合は、デッキを最大2つの基本エネルギーカードで検索し、PoliWhirlに取り付けます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "PoliWhirlに付随する水エネルギーごとに30のダメージに加えて10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
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
