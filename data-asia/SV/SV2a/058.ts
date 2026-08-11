import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗",
		th: "การ์ดี",
		id: "Growlithe",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。",
		'zh-tw': "能毫不畏懼地去對抗比自己更強更大的對手。 性格非常勇敢可靠。",
		th: "มีนิสัยที่พึ่งพาได้ด้วยความกล้ายืนหยัดสู้โดยไม่กลัวคู่ต่อสู้ที่แข็งแกร่งและใหญ่กว่าตัวเอง",
		id: "Growlithe memiliki kepribadian pemberani dan dapat diandalkan, tidak takut untuk menghadapi lawan yang lebih kuat dan lebih besar dari dirinya.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "じょうはつ",
				'zh-tw': "蒸發",
				th: "ระเหย",
				id: "Menguapkan",
			},
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンについている[W]エネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的【水】能量，將其丟棄。",
				th: "เลือกพลังงาน[น้ำ]ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
				id: "Pilih 1 Energi {Air} yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719500,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837333,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837334,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [58],
};

export default card;
