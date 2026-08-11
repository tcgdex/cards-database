import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パラス",
		'zh-tw': "派拉斯",
		'th-th': "พารัส",
		'id-id': "Paras",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "冬虫夏草と いう キノコが 虫を 操っているのだ。 虫の 意思は 無視される。",
		'zh-tw': "控制蟲子的是一種 叫做冬蟲夏草的蕈類。 蟲子的意志會被忽視。",
		'th-th': "เห็ดที่ชื่อโทจูคะโซจะคอยบงการแมลง โดยไม่สนใจความต้องการของแมลง",
		'id-id': "Jamur ulat Yarsagumba mengendalikan bagian tubuh serangga dari Paras. Kemauan serangga tidak dipedulikan.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ふむ",
				'zh-tw': "踩",
				'th-th': "เหยียบ",
				'id-id': "Menginjak",
			},
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: {
				'ja-jp': "ほうしだま",
				'zh-tw': "孢子彈",
				'th-th': "ลูกสปอร์",
				'id-id': "Bola Spora",
			},
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
				'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719488,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837309,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837310,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [46],
};

export default card;
