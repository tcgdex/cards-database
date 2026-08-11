import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ゾロアークV",
		'zh-tw': "洗翠 索羅亞克V",
		th: "ฮิซุย โซโรอาร์คV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うつろがえり",
				'zh-tw': "虛無折返",
				th: "กลับสู่ความว่างเปล่า",
			},
			damage: 30,
			cost: [],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
				th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			},
		},
		{
			name: {
				ja: "シャドーサイクロン",
				'zh-tw': "暗影旋風",
				th: "ชาโดว์ไซโคลน",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687690,
				tcgplayer: 571666,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [571],
};

export default card;
