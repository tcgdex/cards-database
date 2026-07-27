import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "れんげきウーラオス",
		'zh-tw': "連擊武道熊師",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "多撃必倒を 信条とする。 水の 流れのように 途切れなく 打撃技を 相手に 叩きこむ。",
		'zh-tw': "以多擊必勝作為信念。會如流水般連續不斷地 用打擊招式轟打對手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スラッシュクロー",
				'zh-tw': "利爪揮砍",
			},
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "れんだんラッシュ",
				'zh-tw': "連彈衝刺",
			},
			damage: "30×",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "自分の場の「れんげき」のポケモンの数×30ダメージ。",
				'zh-tw': "造成自己的場上「連擊」寶可夢的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586558,
				tcgplayer: 571295,
			},
		},
	],

	evolveFrom: {
		ja: "ダクマ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [892],
};

export default card;
