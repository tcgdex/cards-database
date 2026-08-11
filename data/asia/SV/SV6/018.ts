import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ",
		'zh-tw': "達摩狒狒",
		th: "ฮิฮิดารุมะ",
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "血気 盛んな ポケモン。 太い 腕から 繰りだす パンチは ダンプカーも 粉々に するぞ。",
		'zh-tw': "總是熱血沸騰的寶可夢。 牠厚重的手臂使出的拳擊 甚至能把砂石車打得粉碎。",
		th: "เป็นโปเกมอนที่มีพละกำลังเต็มเปี่ยม หมัดที่ปล่อยออกมาจากลำแขนท่อนใหญ่ แม้รถบรรทุกเทท้ายก็แหลกเป็นผุยผงได้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ころがりタックル",
				'zh-tw': "滾動衝撞",
				th: "กลิ้งโจมตี",
			},
			damage: 60,
			cost: ["Fire", "Fire"],
		},
		{
			name: {
				ja: "もうかのとっしん",
				'zh-tw': "猛火猛撞",
				th: "ไฟลุกพุ่งเข้าใส่",
			},
			damage: 210,
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "このポケモンにも70ダメージ。",
				'zh-tw': "這隻寶可夢也受到70點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 70 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767001,
				tcgplayer: 568008,
			},
		},
	],

	evolveFrom: {
		ja: "ダルマッカ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [555],
};

export default card;
