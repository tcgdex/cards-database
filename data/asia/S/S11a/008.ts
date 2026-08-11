import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ドレディア",
		'zh-tw': "洗翠 裙兒小姐",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "雪深き山に 棲みしゆえに 脚力が 発達したと 考察す。 周囲の者を 鼓舞する 香りを 冠の花より 放つ。",
		'zh-tw': "據考察，雪山深處的棲息環境為其帶來了發達的腳力。會從頭冠般的花中發出鼓舞周遭夥伴的香氣。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みなぎるかおり",
				'zh-tw': "充溢香氣",
			},
			cost: [],
			effect: {
				ja: "自分の山札から[G]エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【草】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "かいてんげり",
				'zh-tw': "迴轉踢",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673005,
				tcgplayer: 570771,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570863,
			},
		},
	],

	evolveFrom: {
		ja: "チュリネ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [549],
};

export default card;
