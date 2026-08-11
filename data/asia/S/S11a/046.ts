import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギアル",
		'zh-tw': "齒輪兒",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "２つの 体は 双子よりも 近い。 べつの 体同士だと いまいち うまく 噛み合わない。",
		'zh-tw': "２個身體比雙胞胎還要親近。要是換成別的齒輪兒，就沒有辦法好好咬合。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "コールサイン",
				'zh-tw': "呼喚信號",
			},
			cost: ["Metal"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673044,
				tcgplayer: 570809,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570893,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [599],
};

export default card;
