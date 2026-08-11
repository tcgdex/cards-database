import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤミカラス",
		'zh-tw': "黑暗鴉",
		'th-th': "ยามิคาราซึ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "ボスのために キラキラ 光るものを 探している。 不吉な 存在と いわれ 忌み嫌う 人も 多い。",
		'zh-tw': "會為了老大尋找閃閃發亮的東西。被人們視為不吉利的象徵，厭惡牠的人也很多。",
		'th-th': "จะหาของที่ส่องแสงระยิบระยับเพื่อหัวหน้า ว่ากันว่าเป็นสิ่งอัปมงคล จึงมีคนรังเกียจอยู่ไม่น้อย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "さぐる",
				'zh-tw': "偵察",
				'th-th': "สำรวจ",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の手札を見る。",
				'zh-tw': "查看對手的手牌。",
				'th-th': "ดูการ์ดบนมือของฝ่ายตรงข้าม",
			},
		},
		{
			name: {
				'ja-jp': "つつく",
				'zh-tw': "啄",
				'th-th': "จิก",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533432,
				tcgplayer: 568991,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [198],
};

export default card;
