import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "トリミアン",
		'zh-tw': "多麗米亞",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "放っておくと 体毛は どんどん 伸び続けるが 信頼した 者にしか カットは 許さない。",
		'zh-tw': "如果放著不管，體毛就會不斷變長，但牠只允許信賴的人幫自己修剪。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ともだちをさがす",
				'zh-tw': "尋找朋友",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ファーアタック",
				'zh-tw': "毛皮攻擊",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560475,
				tcgplayer: 569191,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [676],
};

export default card;
