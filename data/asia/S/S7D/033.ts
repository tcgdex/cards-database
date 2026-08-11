import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
		'zh-tw': "狐大盜",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "身軽な 体と 鋭い ツメで エサや タマゴを 盗んで まわる。 パルスワンが 天敵。",
		'zh-tw': "靠著輕盈的身體和銳利的爪子到處去偷食物和蛋。逐電犬是牠的天敵。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ファンブルハンド",
				'zh-tw': "漏接之手",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、それぞれ山札を4枚引く。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。雙方玩家各將自己的手牌全部翻回反面並重洗，放回牌庫下方。然後，各從牌庫抽出4張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "しっぽでたたく",
				'zh-tw': "尾擊",
			},
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571616,
				tcgplayer: 569356,
			},
		},
	],

	evolveFrom: {
		ja: "クスネ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [828],
};

export default card;
