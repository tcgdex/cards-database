import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン",
		'zh-tw': "淚眼蜥",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "皮膚の 色は 濡れると 変わる。 カモフラージュ されたかの ように 姿が 見えなく なるのだ。",
		'zh-tw': "皮膚在濕掉時會變色，彷彿像是隱身了一樣， 誰都看不見牠的身影。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どんどんよぶ",
				'zh-tw': "連連召喚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「れんげき」のたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張「連擊」【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ダブルスピン",
				'zh-tw': "雙重旋轉",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586552,
				tcgplayer: 571289,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578374,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [816],
};

export default card;
