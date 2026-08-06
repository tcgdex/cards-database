import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュナイパー",
		'zh-tw': "狙射樹梟",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "翼に 仕込まれた 矢羽根を 弓矢のように つがえて 放つ。 狙った 的は 外さない。",
		'zh-tw': "會像射箭那樣射出 藏在自己翅膀裡的箭羽。 只要瞄準目標就絕不會射偏。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "フェザーストック",
				'zh-tw': "羽毛庫存",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札が7枚になるように、山札を引く。",
				'zh-tw': "從牌庫抽卡直到自己的手牌滿7張為止。",
			},
		},
		{
			name: {
				ja: "ストロングショット",
				'zh-tw': "強力射擊",
			},
			damage: 170,
			cost: ["Grass"],
			effect: {
				ja: "自分の手札から「基本[G]エネルギー」を1枚トラッシュする。トラッシュできないなら、このワザは失敗。",
				'zh-tw': "從自己的手牌將1張「基本【草】能量」卡丟棄。若無法丟棄，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773754,
				tcgplayer: 566256,
			},
		},
	],

	evolveFrom: {
		ja: "フクスロー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [724],
};

export default card;
