import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケルディオ",
		'zh-tw': "凱路迪歐",
		'th-th': "เคลดิโอ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "覚悟を 決めることで 全身に 力が みなぎって 素早くなり 飛び跳ねると 残像が みえる。",
		'zh-tw': "透過下定決心來讓全身充滿力量並變得敏捷。 當跳躍起來的時候能看到殘影。",
		'th-th': "เมื่อเตรียมใจได้แล้ว พลังจะเอ่อล้นทั่วกายจนเคลื่อนไหวได้อย่างว่องไว พอกระโดดแล้วจะเห็นภาพค้างติดตา",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "けとばす",
				'zh-tw': "踢飛",
				'th-th': "ดีด",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ラインフォース",
				'zh-tw': "隊列之力",
				'th-th': "ไลน์ฟอร์ซ",
			},
			damage: "10+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加自己的備戰寶可夢的數量×20點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายเรา x20",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687512,
				tcgplayer: 571570,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [647],
};

export default card;
