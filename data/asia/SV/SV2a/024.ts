import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボックex",
		'zh-tw': "阿柏怪ex",
		'th-th': "อาร์บ็อกex",
		'id-id': "Arbok ex",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "しばりつける",
				'zh-tw': "束縛",
				'th-th': "มัดยึด",
				'id-id': "Menjerat",
			},
			damage: 70,
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
				'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			},
		},
		{
			name: {
				'ja-jp': "メナスファング",
				'zh-tw': "脅迫獠牙",
				'th-th': "คมเขี้ยวคุกคาม",
				'id-id': "Menace Fang",
			},
			damage: 150,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手は相手自身の手札を2枚選び、トラッシュする。",
				'zh-tw': "對手選擇對手自己的2張手牌，將其丟棄。",
				'th-th': "ฝ่ายตรงข้ามเลือกการ์ดบนมือฝ่ายตรงข้ามเอง 2 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
				'id-id': "Lawan memilih 2 lembar Kartu Pegangannya, lalu membuangnya ke Trash.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719466,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アーボ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [24],

	suffix: "EX",
};

export default card;
