import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Kingdra Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [230],
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "遺伝的記憶",
			},
			effect: {
				ja: "Kingdra Exの基本的なポケモンカードまたはステージ1エボリューションカードからの攻撃を使用してください。 （Kingdra Exは、その攻撃のエネルギーコストを支払う必要はありません。）",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ハイドロキャノン",
			},
			effect: {
				ja: "50のダメージに加えて、Kingdra Exに取り付けられた各水エネルギーに対して20のダメージがさらに20件のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
