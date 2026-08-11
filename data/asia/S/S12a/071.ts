import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリキーV",
		'zh-tw': "怪力V",
		'th-th': "ไคริกีV",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "リベンジバスター",
				'zh-tw': "復仇光炮",
				'th-th': "รีเวนจ์บัสเตอร์",
			},
			damage: "50+",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンにダメカンがのっているなら、50ダメージ追加。",
				'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加50點傷害。",
				'th-th': "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			},
		},
		{
			name: {
				'ja-jp': "ちきゅうなげ",
				'zh-tw': "地球上投",
				'th-th': "ขว้างใส่โลก",
			},
			damage: 140,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687633,
				tcgplayer: 571609,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [68],
};

export default card;
