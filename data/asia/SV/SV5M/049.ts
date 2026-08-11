import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "メルタン",
		'zh-tw': "美錄坦",
		th: "เมลตัน",
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "金属を 溶かして 食べてしまう。 液体金属を 循環させて 体内で エネルギーを つくる。",
		'zh-tw': "會溶解金屬然後吃掉。透過讓液體金屬在體內 循環來製造能量。",
		th: "หลอมละลายโลหะแล้วกินเข้าไป ทำให้โลหะเหลวไหลเวียนไปทั่วร่างเพื่อสร้างพลังงานภายในร่างกาย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ずつき",
				'zh-tw': "頭錘",
				th: "พุ่งหัวชน",
			},
			damage: 50,
			cost: ["Metal", "Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752933,
				tcgplayer: 566200,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [808],
};

export default card;
