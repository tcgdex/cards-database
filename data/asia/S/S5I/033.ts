import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トロッゴン",
		'zh-tw': "大炭車",
		'th-th': "โทร็อกกอน",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "脚を 高速で 回転させて 時速３０キロで 走る。 摂氏 １０００度の 炎を 噴き出す。",
		'zh-tw': "能透過高速旋轉自己的腳，以３０公里的時速奔跑。能噴出攝氏１０００度的火焰。",
		'th-th': "วิ่งได้ 30 กิโลเมตรต่อชั่วโมงโดยหมุนขาด้วยความเร็วสูง พ่นไฟร้อนสูงถึง 1000 องศาเซลเซียส",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "たいあたり",
				'zh-tw': "撞擊",
				'th-th': "พุ่งเข้าชน",
			},
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				'ja-jp': "ワイルドタックル",
				'zh-tw': "狂野衝撞",
				'th-th': "ไวลด์แทคเคิล",
			},
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				'th-th': "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533387,
				tcgplayer: 568982,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タンドン",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [838],
};

export default card;
