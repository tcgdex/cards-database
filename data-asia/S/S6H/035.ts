import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト",
		'zh-tw': "沙奈朵",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "トレーナーを 守るためなら サイコパワーを 使いきり 小さな ブラックホールを つくりだす。",
		'zh-tw': "如果是為了保護訓練家，牠會不惜用盡自己的精神力量製造出小型黑洞。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アルカナシャイン" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ブレインウェーブ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[超]エネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560451,
				tcgplayer: 569167,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [282],
};

export default card;
