import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Omastar",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [139],
	hp: 110,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "引き下げます",
			},
			effect: {
				ja: "相手が進化したポケモンをプレイしている場合は、それぞれから最高のステージ進化カードを削除し、それらのカードを手に戻します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ハイドロキャノン",
			},
			effect: {
				ja: "30のダメージに加えて、Omastarに取り付けられた水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。  この方法で40以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 2,

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
