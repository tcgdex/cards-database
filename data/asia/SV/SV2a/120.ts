import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトデマン",
		'zh-tw': "海星星",
		'th-th': "ฮิโตเดมัน",
		'id-id': "Staryu",
	},

	illustrator: "Arai Kiriko",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "魚ポケモンに ついばまれるが 体が ちぎれても すぐに 再生するので 気にしない。",
		'zh-tw': "會被魚寶可夢啄食，但是即使身體被咬斷也能很快就 再生，所以一點都不在意。",
		'th-th': "ถึงแม้ร่างกายจะโดนโปเกมอนปลาตอดกินจนขาดไปก็ไม่สนใจเพราะจะงอกออกมาใหม่ทันที",
		'id-id': "Meskipun tubuhnya putus tercabik karena digigit oleh Pokémon ikan, Staryu tidak peduli karena tubuhnya akan segera tumbuh kembali.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "スピードスター",
				'zh-tw': "高速星星",
				'th-th': "สปีดสตาร์",
				'id-id': "Speed Star",
			},
			damage: 30,
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
				'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
				'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719573,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837466,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837467,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [120],
};

export default card;
