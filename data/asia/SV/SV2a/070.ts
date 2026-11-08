import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツドン",
		'zh-tw': "口呆花",
		'th-th': "อุซึดง",
		'id-id': "Weepinbell",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "まず 毒の粉を 吐き 相手の 動きを 止めてしまってから 溶解液で とどめを 刺す。",
		'zh-tw': "會先吐出有毒的粉末， 讓對手停止行動後， 再用溶解液解決對手。",
		'th-th': "ก่อนอื่นจะพ่นผงพิษหยุดการเคลื่อนไหวของฝ่ายตรงข้ามไว้ก่อน แล้วปิดท้ายด้วยของเหลวทำละลาย",
		'id-id': "Weepinbell terlebih dahulu menyemburkan bubuk beracun untuk menghentikan gerakan lawan, lalu menghabisinya menggunakan cairan pelebur.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "いあいぎり",
				'zh-tw': "居合斬",
				'th-th': "ตัด",
				'id-id': "Potongan Iai",
			},
			damage: 30,
			cost: ["Grass"],
		},
		{
			name: {
				'ja-jp': "しるをとばす",
				'zh-tw': "噴汁",
				'th-th': "ฉีดพ่นน้ำ",
				'id-id': "Menyemprotkan Getah",
			},
			damage: 50,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719512,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837356,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837357,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マダツボミ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [70],
};

export default card;
