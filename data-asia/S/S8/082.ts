import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコロロ",
		'zh-tw': "優雅貓",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "美しい 毛並みを 持ち 女性トレーナーに 大人気。 決まった 住処を 持たない。",
		'zh-tw': "有著美麗的毛髮，非常受女性訓練家的歡迎。沒有固定的住所。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きままなせわやき",
				'zh-tw': "愛管閒事",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。",
				'zh-tw': "查看對手的手牌，選擇其中1張卡，放回對手的牌庫下方。",
			},
		},
		{
			name: {
				ja: "おうふくビンタ",
				'zh-tw': "連環巴掌",
			},
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×50ダメージ。",
				'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575637,
				tcgplayer: 569583,
			},
		},
	],

	evolveFrom: {
		ja: "エネコ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [301],
};

export default card;
