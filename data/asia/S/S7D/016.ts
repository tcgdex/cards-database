import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "バケッチャ",
		'zh-tw': "南瓜精",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "かぼちゃの 穴から 照らしている 光は 見た 人や ポケモンを 催眠状態にして 操る。",
		'zh-tw': "南瓜的洞裡發出的光會催眠並控制看到牠的人和寶可夢。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かぼちゃのあな",
				'zh-tw': "南瓜洞穴",
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。",
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將場上的競技場卡丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ふむ",
				'zh-tw': "踩",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571598,
				tcgplayer: 569339,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [710],
};

export default card;
