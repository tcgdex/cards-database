import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フーディンex",
		'zh-tw': "胡地ex",
		'th-th': "ฟูดินex",
		'id-id': "Alakazam ex",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "マインドジャック",
				'zh-tw': "意志劫持",
				'th-th': "มายด์แจ็ค",
				'id-id': "Mind Jack",
			},
			damage: "90+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数×30ダメージ追加。",
				'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x30",
				'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Pokémon Cadangan lawan.",
			},
		},
		{
			name: {
				'ja-jp': "ディメンションハンド",
				'zh-tw': "維度之手",
				'th-th': "ไดเมนชันแฮนด์",
				'id-id': "Dimension Hand",
			},
			damage: 120,
			cost: ["Psychic", "Psychic"],
			effect: {
				'ja-jp': "このワザは、このポケモンがベンチにいても使える。",
				'zh-tw': "就算這隻寶可夢在備戰區，這個招式也可使用。",
				'th-th': "ท่าต่อสู้นี้ แม้โปเกมอนนี้อยู่บนเบนช์ก็ใช้ได้",
				'id-id': "Serangan ini dapat digunakan meskipun Pokémon ini ada di Cadangan.",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719656,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ユンゲラー",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Special illustration rare",
	dexId: [65],

	suffix: "EX",
};

export default card;
