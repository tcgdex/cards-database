import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
		'zh-tw': "鐵啞鈴",
		th: "ดันบัล",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "磁力を お尻から 発生させ 敵を 勢いよく 吸いよせて 鋭い ツメで 串刺しにする。",
		'zh-tw': "會從臀部放出磁力將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。",
		th: "ปล่อยอำนาจแม่เหล็กออกมาทางก้น ดูดเอาศัตรูให้พุ่งเข้าหาและเสียบทะลุด้วยกรงเล็บอันแหลมคม",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ツメをたてる",
				'zh-tw': "豎爪",
				th: "กางกรงเล็บ",
			},
			damage: 10,
			cost: ["Metal"],
		},
		{
			name: {
				ja: "アイアンタックル",
				'zh-tw': "鐵之衝撞",
				th: "ไอออนแท็กเกิล",
			},
			damage: 50,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752930,
				tcgplayer: 566197,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [374],
};

export default card;
