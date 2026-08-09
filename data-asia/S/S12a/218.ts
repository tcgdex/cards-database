import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウV",
		'zh-tw': "雷公V",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しゅんそく",
				'zh-tw': "瞬步",
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を1枚引く。",
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。從自己的牌庫抽出1張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ライトニングロンド",
				'zh-tw': "雷電迴旋曲",
			},
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687780,
				tcgplayer: 571756,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [243],
};

export default card;
