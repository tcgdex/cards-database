import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルージュラex",
		'zh-tw': "迷唇姐ex",
		'th-th': "รูจูลาex",
		'id-id': "Jynx ex",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ズッキュンキッス",
				'zh-tw': "動心之吻",
				'th-th': "จุ๊บโดนใจ",
				'id-id': "Ciuman Meluluhkan",
			},
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンがねむりなら、そのポケモンをきぜつさせる。",
				'zh-tw': "若對手的戰鬥寶可夢【睡眠】，則將那隻寶可夢【昏厥】。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ] จะทำให้โปเกมอนนั้น[หมดสภาพ]",
				'id-id': "Jika Pokémon Bertarung lawan mengalami kondisi Tidur, Pokémon tersebut KO.",
			},
		},
		{
			name: {
				'ja-jp': "こごえるかぜ",
				'zh-tw': "冰凍之風",
				'th-th': "สายลมเยือกแข็ง",
				'id-id': "Angin Dingin",
			},
			damage: 120,
			cost: ["Water", "Water", "Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
				'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719646,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [124],

	suffix: "EX",
};

export default card;
