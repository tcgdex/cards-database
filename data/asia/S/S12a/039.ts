import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくデンヂムシ",
		'zh-tw': "光輝蟲電寶",
		th: "เรเดียนต์เด็นจิมูชิ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "頑丈な 殻で 身を 守る。 顎の 先端から 電気を 流して 反撃する。",
		'zh-tw': "用結實的外殼保護自己。會從顎部的尖端 放出電流反擊對手。",
		th: "ปกป้องร่างกายด้วยกระดองทนทาน ปล่อยกระแสไฟจากปลายกรามเพื่อตอบโต้",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ビリビリブロック",
				'zh-tw': "麻麻障礙",
				th: "ไฟดูดสกัดกั้น",
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのプレイヤーは、手札からエネルギーを「ポケモンV」につけるたび、そのポケモンにダメカンを2個のせる。",
				'zh-tw': "只要這隻寶可夢在場上，雙方玩家每次從手牌將能量附於「寶可夢【V】」身上時，在那隻寶可夢身上放置2個傷害指示物。",
				th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ทุกครั้งที่ผู้เล่นทั้งสองฝ่ายติดการ์ดพลังงานจากบนมือที่ [โปเกมอน【V】] ให้วางตัวนับแดเมจ 2 ตัวบนโปเกมอนนั้น",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ちょくげきだん",
				'zh-tw': "直擊彈",
				th: "ยิงตรง",
			},
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
				th: "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687519,
				tcgplayer: 571577,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [737],
};

export default card;
