import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イルカマンex",
		'zh-tw': "海豚俠ex",
		'th-th': "อิรุกะแมนex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "マイティソウル",
				'zh-tw': "全能靈魂",
				'th-th': "ไมตี้โซล",
			},
			effect: {
				'ja-jp': "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。",
				'zh-tw': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。",
				'th-th': "การ์ดนี้ สามารถวางบนกระดานได้ด้วยเอฟเฟกต์ของความสามารถ [แปลงร่างขั้นสุดยอด] ของ [อิรุกะแมน] เท่านั้น",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ギガインパクト",
				'zh-tw': "終極衝擊",
				'th-th': "กิก้าอิมแพกต์",
			},
			damage: 250,
			cost: ["Water"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767129,
				tcgplayer: 568026,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナミイルカ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [964],

	suffix: "EX",
};

export default card;
