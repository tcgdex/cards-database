import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "寒さに 強く 氷の 海も 平気。 皮膚は スベスベで 少しだけ ひんやり しているよ。",
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的，摸起來會有點涼。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ホワイトコール",
				'zh-tw': "混合毒素",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「メロン」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				ja: "こごえるかぜ",
				'zh-tw': "煙之暴擊",
			},
			damage: 50,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【惡】能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560434,
				tcgplayer: 569150,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [131],
};

export default card;
