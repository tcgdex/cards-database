import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
		'zh-tw': "流氓鱷",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		ja: "砂の ギャングとも 呼ばれる。 強力な 顎で ぶ厚い 鉄板も たやすく 食いちぎる。",
		'zh-tw': "又被稱為沙之惡霸。就連厚厚的鐵板也能被牠 用強力的下顎輕鬆咬爛。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "すなのギャング",
				'zh-tw': "沙之結夥",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたときと、このポケモンがバトル場で相手のワザのダメージを受けてきぜつしたとき、それぞれ1回使える。相手の手札からオモテを見ないで1枚選び、トラッシュする。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，與這隻寶可夢在戰鬥場上受到對手的招式的傷害而【氣絕】時，各可使用1次。在不看正面的情況下，選擇1張對手的手牌，將其丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "すてみタックル",
				'zh-tw': "捨身衝撞",
			},
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667945,
				tcgplayer: 570001,
			},
		},
	],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [553],
};

export default card;
