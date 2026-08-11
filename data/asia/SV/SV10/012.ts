import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "オリーヴァex",
		'zh-tw': "奧利瓦ex",
		'zh-cn': "奧利瓦ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "オイルマシンガン",
				'zh-tw': "油之機關槍",
				'zh-cn': "油之機關槍",
			},
			cost: ["Grass"],
			effect: {
				ja: "相手のポケモンを6回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×20ダメージ。（1匹を2回以上選べる。）",
				'zh-tw': "選擇6次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×20點傷害。（1隻可選擇2次以上。）",
				'zh-cn': "選擇6次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×20點傷害。（1隻可選擇2次以上。）",
			},
		},
		{
			name: {
				ja: "アロマシュート",
				'zh-tw': "芳香射擊",
				'zh-cn': "芳香射擊",
			},
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンの特殊状態を、すべて回復する。",
				'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。",
				'zh-cn': "將這隻寶可夢的特殊狀態全部恢復。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821843,
				tcgplayer: 628653,
			},
		},
	],

	evolveFrom: {
		ja: "オリーニョ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [930],

	suffix: "EX",
};

export default card;
