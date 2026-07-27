import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアロー",
		'zh-tw': "烈箭鷹",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "鳥ポケモンが おもな 獲物。 羽毛の あいだから 火の粉を 噴き出し 相手を 威嚇する。",
		'zh-tw': "主要的獵物是鳥寶可夢。會從羽毛的縫隙裡噴出 火花威嚇對手。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "クイックダイブ",
				'zh-tw': "快速俯衝",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "むじひないちげき",
				'zh-tw': "狠心一擊",
			},
			damage: "80+",
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、80ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667894,
				tcgplayer: 569950,
			},
		},
	],

	evolveFrom: {
		ja: "ヒノヤコマ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [663],
};

export default card;
