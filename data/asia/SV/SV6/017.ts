import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダルマッカ",
		'zh-tw': "火紅不倒翁",
		'th-th': "ดารุมักกะ",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "体の 中で 燃える 炎が パワーの 源。 火が 小さく なると たちまち 眠ってしまう。",
		'zh-tw': "能量之源是體內的火焰。 如果火焰變小了， 牠馬上就會睡著。",
		'th-th': "ไฟที่เผาไหม้อยู่ในร่างกายเป็นแหล่งพลังงาน หากเปลวเพลิงหรี่เล็กลงก็จะหลับไปในทันที",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かいりき",
				'zh-tw': "怪力",
				'th-th': "พลังมหากาฬ",
			},
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: {
				'ja-jp': "ほのおタックル",
				'zh-tw': "火焰衝撞",
				'th-th': "ไฟกระแทก",
			},
			damage: 50,
			cost: ["Fire", "Fire"],
			effect: {
				'ja-jp': "このポケモンにも20ダメージ。",
				'zh-tw': "這隻寶可夢也受到20點傷害。",
				'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766993,
				tcgplayer: 568007,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [554],
};

export default card;
