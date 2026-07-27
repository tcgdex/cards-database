import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "タギングル",
		'zh-tw': "塗標客",
		'zh-cn': "塗標客",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "タギングルが 描く 模様は 個体によって 異なり 生涯 同じ 模様を 描き続ける。",
		'zh-tw': "塗標客畫的圖案 會依個體而有所不同。 一生不斷畫著相同圖案。",
		'zh-cn': "塗標客畫的圖案 會依個體而有所不同。 一生不斷畫著相同圖案。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "いたずらペイント",
				'zh-tw': "惡作劇作畫",
				'zh-cn': "惡作劇作畫",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のトラッシュからエネルギーを3枚まで選び、相手のポケモンに好きなようにつける。",
				'zh-tw': "從對手的棄牌區選擇最多3張能量卡，以任意方式附於對手的寶可夢身上。",
				'zh-cn': "從對手的棄牌區選擇最多3張能量卡，以任意方式附於對手的寶可夢身上。",
			},
		},
		{
			name: {
				ja: "エナジーグラフィティ",
				'zh-tw': "能量塗鴉",
				'zh-cn': "能量塗鴉",
			},
			damage: "40×",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のポケモン全員についているエネルギーの数×40ダメージ。",
				'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×40點傷害。",
				'zh-cn': "造成對手的所有寶可夢身上附加的能量的數量×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793508,
				tcgplayer: 587654,
			},
		},
	],

	evolveFrom: {
		ja: "シルシュルー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [945],
};

export default card;
