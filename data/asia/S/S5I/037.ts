import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオスVMAX",
		'zh-tw': "一擊武道熊師VMAX",
		th: "วูลาโอส จู่โจมครั้งเดียวVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: {
				ja: "せいけんづき",
				'zh-tw': "正拳突",
				th: "กำปั้นตรง",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "キョダイイチゲキ",
				'zh-tw': "超極巨奪命一擊",
				th: "กิกะจู่โจมครั้งเดียว",
			},
			damage: 270,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
				th: "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามมาคำนวณแดเมจของท่าต่อสู้นี้",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 533407,
				tcgplayer: 568986,
			},
		},
	],

	evolveFrom: {
		ja: "いちげきウーラオスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [892],
};

export default card;
