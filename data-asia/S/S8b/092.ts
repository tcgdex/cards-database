import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオスV",
		'zh-tw': "一擊武道熊師V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とぎすます",
				'zh-tw': "磨礪",
			},
			cost: ["Fighting"],
			effect: {
				ja: "自分の山札から[闘]エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【鬥】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "インパクトブロー",
				'zh-tw': "衝擊打擊",
			},
			damage: 180,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「インパクトブロー」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586608,
				tcgplayer: 571345,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [892],
};

export default card;
