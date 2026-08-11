import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シャンデラ",
		'zh-tw': "水晶燈火靈",
		'th-th': "แชนเดลา",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。",
		'zh-tw': "會吸走並燃燒掉靈魂。 透過搖晃手臂的火焰 讓對手陷入催眠狀態。",
		'th-th': "สูบวิญญาณและเผาให้มอดไหม้ สั่นเปลวเพลิงบนแขนเพื่อทำให้อีกฝ่ายตกอยู่ในสภาวะถูกสะกดจิต",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "いざなうあかり",
				'zh-tw': "勸誘亮光",
				'th-th': "แสงไฟล่อหลอก",
			},
			effect: {
				'ja-jp': "自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。",
				'zh-tw': "在自己的回合時可使用1次。雙方玩家各從牌庫抽出1張卡。",
				'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ผู้เล่นทั้งสองฝ่าย แต่ละฝ่ายจั่วการ์ด 1 ใบจากสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "マインドルーラー",
				'zh-tw': "意志統治者",
				'th-th': "มายด์รูลเลอร์",
			},
			damage: "30×",
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手の手札の枚数×30ダメージ。",
				'zh-tw': "造成對手的手牌的張數×30點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนการ์ดบนมือฝ่ายตรงข้าม x30",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767006,
				tcgplayer: 568011,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ランプラー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [609],
};

export default card;
