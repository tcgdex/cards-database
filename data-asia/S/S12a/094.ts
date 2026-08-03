import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "コイル",
		'zh-tw': "小磁怪",
		th: "คอยล์",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "鉄球に 一つ目ありし 奇天烈な姿。 馬蹄形の 磁石が如き 腕から 発する 磁力により 浮遊すると 推察す。",
		'zh-tw': "鐵球上長著一隻眼睛的相貌可謂奇異。 據推測，牠是靠著馬蹄形磁鐵般的 雙臂發出的磁力讓自己保持懸浮。",
		th: "มีลูกตา 1 ลูกที่บอลเหล็ก และมีรูปร่างแปลกประหลาด สันนิษฐานกันว่ามันบินได้เพราะพลังแม่เหล็กที่ปล่อยออกมาจากแขนที่คล้ายกับแม่เหล็กรูปเกือกม้า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "マグネキャッチ",
				'zh-tw': "磁力捕捉",
				th: "แมกเนติกแคช",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[M]エネルギーを3枚まで選び、相手に見せて、山札にもどして切る。",
				'zh-tw': "從自己的棄牌區選擇最多3張【鋼】能量卡，在給對手看過後放回牌庫並重洗。",
				th: "เลือกการ์ดพลังงาน[โลหะ]ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู ใส่กลับไปในสำรับการ์ดแล้วสับ",
			},
		},
		{
			name: {
				ja: "ボールアタック",
				'zh-tw': "滾球攻擊",
				th: "บอลแอทแทก",
			},
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687656,
				tcgplayer: 571632,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577478,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [81],
};

export default card;
