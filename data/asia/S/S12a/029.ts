import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マナフィ",
		'zh-tw': "瑪納霏",
		'th-th': "มานาฟี",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。",
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。",
		'th-th': "มีพลังอันน่าพิศวงที่ทำให้สื่อใจกับโปเกมอนทุกประเภทได้",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "なみのヴェール",
				'zh-tw': "浪之幕",
				'th-th': "ม่านคลื่นน้ำ",
			},
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
				'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัวจะไม่ได้รับแดเมจจากท่าต่อสู้ของฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "みずかけ",
				'zh-tw': "潑水",
				'th-th': "สาดน้ำ",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687509,
				tcgplayer: 571567,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577449,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [490],
};

export default card;
