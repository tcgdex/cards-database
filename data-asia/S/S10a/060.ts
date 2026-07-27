import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エテボース",
		'zh-tw': "雙尾怪手",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。",
		'zh-tw': "不管做什麼事都會用到尾巴。如果牠用２根尾巴抱緊你， 就代表牠真的和你很親近。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つかみほうだい",
				'zh-tw': "抓到飽",
			},
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。",
				'zh-tw': "擲硬幣直到出現反面，從自己的牌庫任意選擇最多與正面出現的次數相同數量的卡，加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "はたきおとす",
				'zh-tw': "拍落",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
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
				cardmarket: 656384,
				tcgplayer: 570723,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577130,
			},
		},
	],

	evolveFrom: {
		ja: "エイパム",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [424],
};

export default card;
