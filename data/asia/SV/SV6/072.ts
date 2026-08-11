import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エアームド",
		'zh-tw': "盔甲鳥",
		'th-th': "แอร์มุโด",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "抜け落ちた 羽根から 剣が 作られることから 紋章の 図案として 人気が 高い。",
		'zh-tw': "由於牠脫落下來的羽毛 能夠製成劍，因此作為 家徽的圖案也很有人氣。",
		'th-th': "เพราะมีการนำขนที่ร่วงออกมาทำเป็นดาบ จึงได้รับความนิยมสูงในการนำมาทำเป็นแบบของตราประจำตระกูล",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "カッターウインド",
				'zh-tw': "利刃之風",
				'th-th': "คัตเตอร์วินด์",
			},
			damage: 30,
			cost: ["Metal"],
		},
		{
			name: {
				'ja-jp': "おおあらし",
				'zh-tw': "大風暴",
				'th-th': "พายุใหญ่",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "場に出ているスタジアムをトラッシュする。",
				'zh-tw': "將場上的競技場卡丟棄。",
				'th-th': "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767165,
				tcgplayer: 568062,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [227],
};

export default card;
