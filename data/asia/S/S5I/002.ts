import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ノクタス",
		'zh-tw': "夢歌仙人掌",
		'th-th': "น็อคทัส",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "砂漠の 旅人の 後ろを 集団で つきまとい 疲れて 動けなく なるのを 待つのだ。",
		'zh-tw': "會成群跟在沙漠中的旅人後方，等待對方因疲累而變得無法動彈。",
		'th-th': "จะเดินกันเป็นกลุ่มติดตามนักเดินทางในทะเลทรายอยู่ไม่ห่างเพื่อรอให้เหนื่อยจนขยับตัวไม่ไหว",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ひっぱる",
				'zh-tw': "拉扯",
				'th-th': "ดึง",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
				'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว แล้วสลับกับโปเกมอนบนตำแหน่งต่อสู้",
			},
		},
		{
			name: {
				'ja-jp': "いがいがパンチ",
				'zh-tw': "傲傲拳",
				'th-th': "หมัดครวญคราง",
			},
			damage: "60+",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに[悪]エネルギーがついているなら、70ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上附有【惡】能量，則增加70點傷害。",
				'th-th': "ถ้าโปเกมอนนี้มีพลังงาน [ความมืด] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 70",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533232,
				tcgplayer: 568950,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "サボネア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [332],
};

export default card;
