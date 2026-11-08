import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カモネギ",
		'zh-tw': "大蔥鴨",
		'th-th': "คาโมเนกิ",
		'id-id': "Farfetch'd",
	},

	illustrator: "KG-2000",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "植物の 茎で 戦う。 茎の 振り方には いくつかの 流派の ようなものが ある。",
		'zh-tw': "用植物的莖來戰鬥。莖的揮舞方式存在著 好幾種不同的流派。",
		'th-th': "ใช้ลำต้นของพืชในการต่อสู้ มีสไตล์การฟาดฟันด้วยลำต้นที่เหมือนกับวิชาต่อสู้หลายรูปแบบ",
		'id-id': "Farfetch'd bertarung menggunakan batang tumbuhan. Terdapat beberapa aliran terkait cara mengayunkan batang.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "しょってくる",
				'zh-tw': "背來",
				'th-th': "แบกขึ้นหลัง",
				'id-id': "Memanggul",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
				'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
				'id-id': "Ambil 2 kartu dari atas Deck sendiri.",
			},
		},
		{
			name: {
				'ja-jp': "ネギでぶつ",
				'zh-tw': "用蔥毆打",
				'th-th': "หวดด้วยต้นหอม",
				'id-id': "Daun Bawang Penghajar",
			},
			damage: 30,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719525,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837394,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837395,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [83],
};

export default card;
