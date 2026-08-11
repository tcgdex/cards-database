import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グランブル",
		'zh-tw': "布魯皇",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "若い 女性に 大人気だが 臆病な上に 繊細なので 番犬 としては 無能だ。",
		'zh-tw': "雖然很受年輕女性歡迎，但牠不但膽小而且個性纖細，以看門狗來說一點用都沒有。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "つかみとる",
				'zh-tw': "抓取",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「ポケモンのどうぐ」を2枚まで選び、相手に見せて、手札に加える。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇最多2張「寶可夢道具」卡，在給對手看過後加入手牌。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575597,
				tcgplayer: 569543,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ブルー",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [210],
};

export default card;
