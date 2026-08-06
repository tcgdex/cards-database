import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサムex",
		'zh-tw': "巨鉗螳螂ex",
		th: "ฮัซซัมex",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "はがねのつばさ",
				'zh-tw': "鋼翼",
				th: "ปีกเหล็ก",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]",
			},
		},
		{
			name: {
				ja: "クロスブレイカー",
				'zh-tw': "十字破壞",
				th: "ครอสเบรกเกอร์",
			},
			damage: "120×",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "このポケモンについている[M]エネルギーを2枚までトラッシュし、その枚数×120ダメージ。",
				'zh-tw': "將最多2張這隻寶可夢身上附加的【鋼】能量卡丟棄，造成其張數×120點傷害。",
				th: "ทิ้งพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ได้สูงสุด 2 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x120",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752973,
				tcgplayer: 566240,
			},
		},
	],

	evolveFrom: {
		ja: "ストライク",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [212],

	suffix: "EX",
};

export default card;
