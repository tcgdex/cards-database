import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
		'zh-tw': "巨鍛匠",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "智商高超，性格豪邁。 會用錘子打飛岩石來攻擊 飛在空中的鋼鎧鴉。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "れんぞくダッシュ",
				'zh-tw': "拍落",
			},
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ追加。",
				'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587820,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [133],
};

export default card;
