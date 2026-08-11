import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴローニャex",
		'zh-tw': "隆隆岩ex",
		'th-th': "โกโลเนียex",
		'id-id': "Golem ex",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "ダイナミックロール",
				'zh-tw': "極限轉動",
				'th-th': "ไดนามิกโรล",
				'id-id': "Dynamic Roll",
			},
			damage: 50,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
				'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา แดเมจของท่าต่อสู้ที่โปเกมอนนี้ ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+120]",
				'id-id': "Pada giliran sendiri berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120.",
			},
		},
		{
			name: {
				'ja-jp': "がんせきボンバー",
				'zh-tw': "岩石衝撞",
				'th-th': "ระเบิดหิน",
				'id-id': "Bom Batu",
			},
			damage: 180,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
				'zh-tw': "這個招式的傷害不計算抵抗力。",
				'th-th': "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
				'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719518,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゴローン",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [76],

	suffix: "EX",
};

export default card;
