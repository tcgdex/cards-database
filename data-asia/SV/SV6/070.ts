import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ペンドラー",
		'zh-tw': "蜈蚣王",
		th: "เพนโดรา",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "首のツメで 獲物を つかむと そのまま 地面に 叩きつけ 毒のトゲを 突きたてるぞ。",
		'zh-tw': "用頸部的爪子夾住獵物後， 會直接將對方摔到地上， 然後用毒刺戳下去。",
		th: "พอจับเหยื่อด้วยกรงเล็บที่อยู่ตามคอได้ ก็จะฟาดลงพื้นแล้วแทงหนามพิษลงไป",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ひどうなひとさし",
				'zh-tw': "偏道一回",
				th: "เสียดแทงไร้เมตตา",
			},
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。",
				'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「10」為止。",
				th: "วางตัวนับแดเมจให้ HP ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเหลือเท่ากับ [10]",
			},
		},
		{
			name: {
				ja: "ヘドロばくだん",
				'zh-tw': "污泥炸彈",
				th: "สลัดจ์บอมบ์",
			},
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767163,
				tcgplayer: 568060,
			},
		},
	],

	evolveFrom: {
		ja: "ホイーガ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [545],
};

export default card;
