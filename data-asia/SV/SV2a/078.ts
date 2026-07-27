import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャロップ",
		'zh-tw': "烈焰馬",
		th: "แกลล็อป",
		id: "Rapidash",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "いちばん 脚が 速い ものが リーダー。 群れが 行く 場所や 走る 速度を 決めている。",
		'zh-tw': "奔跑速度最快的烈焰馬會成為首領，決定族群 前往的地點和奔跑速度。",
		th: "ตัวที่วิ่งเร็วที่สุดจะเป็นจ่าฝูง จ่าฝูงจะเป็นผู้กำหนดจุดหมายรวมถึงความเร็วในการวิ่งของฝูง",
		id: "Rapidash yang kakinya paling cepat menjadi pemimpin di kelompoknya. Pemimpin menentukan tempat yang dituju dan kecepatan lari kelompok.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こがす",
				'zh-tw': "灼熱",
				th: "เผา",
				id: "Menghanguskan",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
				id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar.",
			},
		},
		{
			name: {
				ja: "マッハターン",
				'zh-tw': "音速迴轉",
				th: "มัคเทิร์น",
				id: "Mach Turn",
			},
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
				id: "Tukar Pokémon ini dengan Pokémon Cadangan.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719520,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837382,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837383,
			},
		},
	],

	evolveFrom: {
		ja: "ポニータ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [78],
};

export default card;
