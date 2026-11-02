import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "キノガッサ",
		'zh-tw': "斗笠菇",
		th: "คิโนกัซซา",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "尻尾の タネは 毒の 胞子で できている。 動きが 見えないほど 素早い パンチで 敵を 倒す。",
		'zh-tw': "尾巴上的種子是由毒孢子所構成的。會以肉眼無法 看清的速度出拳打倒敵人。",
		th: "เมล็ดที่หางคือสปอร์พิษ จัดการศัตรูด้วยหมัดอย่างว่องไวชนิดมองแทบไม่เห็น",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パンチ",
				'zh-tw': "出拳",
				th: "หมัด",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ナックルインパクト",
				'zh-tw': "關節衝擊",
				th: "นักเคิลอิมแพกต์",
			},
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752888,
				tcgplayer: 566158,
			},
		},
	],

	evolveFrom: {
		ja: "キノココ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [286],
};

export default card;
