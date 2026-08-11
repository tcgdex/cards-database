import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クワガノン",
		'zh-tw': "鍬農炮蟲",
		'th-th': "คุวากานอน",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'ja-jp': "お腹で 発電した 電気を 大きな 顎で 収束させて 大出力の ビームを 撃つ。",
		'zh-tw': "用腹部發電，並把電力集中在大大的顎部， 釋放出能量驚人的光束。",
		'th-th': "ไฟฟ้าที่ผลิตจากท้อง เก็บไว้ในกรามขนาดใหญ่แล้วปล่อยลำแสงขนาดใหญ่โจมตี",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "マッハボルト",
				'zh-tw': "音速伏特",
				'th-th': "มัคโบลต์",
			},
			damage: 50,
			cost: ["Lightning"],
		},
		{
			name: {
				'ja-jp': "ちょくれつキャノン",
				'zh-tw': "串聯加農炮",
				'th-th': "ปืนใหญ่อนุกรม",
			},
			damage: "120+",
			cost: ["Lightning", "Lightning"],
			effect: {
				'ja-jp': "自分のベンチの「デンヂムシ」の数×80ダメージ追加。",
				'zh-tw': "增加自己的備戰區的「蟲電寶」的數量×80點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวน [เด็นจิมูชิ] บนเบนช์ฝ่ายเรา x80",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752909,
				tcgplayer: 566179,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "デンヂムシ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [738],
};

export default card;
