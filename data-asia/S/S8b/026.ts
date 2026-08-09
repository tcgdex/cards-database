import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラ",
		'zh-tw': "刺龍王",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "どんな 生き物も 降りられない 深い 海の底で 眠りながら 力を 蓄えている という。",
		'zh-tw': "據說牠會沉睡在任何生物都無法潛到的深海底部積蓄力量。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かいていのぬし",
				'zh-tw': "海底霸主",
			},
			effect: {
				ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについている[水]エネルギーを好きなだけ選び、このポケモンにつけ替える。",
				'zh-tw': "每次當自己的戰鬥寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，可使用1次。選擇【氣絕】的寶可夢身上附加的任意數量的【水】能量，改附於這隻寶可夢身上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アクアバースト",
				'zh-tw': "水暴流",
			},
			damage: "40×",
			cost: ["Water"],
			effect: {
				ja: "このポケモンについている[水]エネルギーの数×40ダメージ。",
				'zh-tw': "造成這隻寶可夢身上附加的【水】能量的數量×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586541,
				tcgplayer: 571279,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [230],
};

export default card;
