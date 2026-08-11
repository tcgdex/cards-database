import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンダース",
		'zh-tw': "雷伊布",
		'th-th': "ธันเดอร์ส",
		'id-id': "Jolteon",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
		'zh-tw': "會把細胞發出的微弱電流都集中起來 釋放強力的電擊。",
		'th-th': "รวบรวมพลังไฟฟ้าอ่อน ๆ ที่เซลล์ปล่อยออกมา แล้วยิงกระแสไฟฟ้าอันทรงพลัง",
		'id-id': "Jolteon mengumpulkan listrik berdaya kecil yang dikeluarkan oleh sel-sel tubuhnya, lalu menembakkan serangan listrik yang kuat.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ちょくげきだん",
				'zh-tw': "直擊彈",
				'th-th': "ยิงตรง",
				'id-id': "Serangan Linear",
			},
			cost: ["Lightning"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				'id-id': "Serangan ini memberikan kerusakan sejumlah 30 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
		{
			name: {
				'ja-jp': "とうしのいかずち",
				'zh-tw': "鬥志雷霆",
				'th-th': "สายฟ้านักสู้",
				'id-id': "Guntur Semangat Petarung",
			},
			damage: "90+",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
				'id-id': "Jika Pokémon Bertarung lawan adalah Pokémon {ex}/{V}, kerusakan yang diberikan bertambah sejumlah 90.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719588,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837494,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837495,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [135],
};

export default card;
