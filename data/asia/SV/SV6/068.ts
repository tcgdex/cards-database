import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フシデ",
		'zh-tw': "百足蜈蚣",
		'th-th': "ฟูชิเดะ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "ヤクデは 種類の 近い 仲間だが おたがいが 出会うと 大げんかに なるぞ。",
		'zh-tw': "雖然和燒火蚣屬於種類 相近的夥伴，但是彼此 撞見時就會大打一架喔。",
		'th-th': "ถึงแม้จะเป็นสายพันธุ์ใกล้เคียงกับยาคุเดะ แต่พอเจอกันก็จะทะเลาะกันใหญ่โต",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "どくえき",
				'zh-tw': "毒液",
				'th-th': "ของเหลวพิษ",
			},
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			},
		},
		{
			name: {
				'ja-jp': "かいてんアタック",
				'zh-tw': "迴轉攻擊",
				'th-th': "โจมตีหมุนวน",
			},
			damage: 40,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767161,
				tcgplayer: 568058,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [543],
};

export default card;
