import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
		'zh-tw': "赫拉克羅斯",
		th: "เฮราครอส",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
		'zh-tw': "擁有十分驚人的怪力。 就連重量是自己體重１００倍的 物體也能輕鬆扔飛。",
		th: "มีพละกำลังมหาศาลมาก สามารถโยนของที่หนักกว่าตัวเอง 100 เท่าได้อย่างสบาย ๆ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "のしかかり",
				'zh-tw': "泰山壓頂",
				th: "ทิ้งตัวทับ",
			},
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
		{
			name: {
				ja: "ちきゅうなげ",
				'zh-tw': "地球上投",
				th: "ขว้างใส่โลก",
			},
			damage: 130,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766971,
				tcgplayer: 567993,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [214],
};

export default card;
