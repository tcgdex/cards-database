import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラ",
		'zh-tw': "捷拉奧拉",
		th: "เซราโอรา",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "雷に 匹敵する スピードで 走り 大電圧を 発する ツメで 敵を 八つ裂きにする。",
		'zh-tw': "以媲美閃電的速度奔跑，用能釋放高壓電的爪子 將敵人撕得粉碎。",
		th: "วิ่งด้วยความเร็วที่เทียบเท่าฟ้าแลบ แล้วเข้าฉีกกระชากศัตรูด้วยกรงเล็บที่ปล่อยไฟฟ้าแรงสูง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ビリビリナックル",
				'zh-tw': "麻麻關節",
				th: "สนับมือไฟดูด",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
		{
			name: {
				ja: "ストロングボルト",
				'zh-tw': "強力伏特",
				th: "สตรองโวลต์",
			},
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752910,
				tcgplayer: 566180,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [807],
};

export default card;
