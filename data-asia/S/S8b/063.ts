import { Card } from "../../../interfaces";
import Set from "../S8b";

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
			name: {
				ja: "アルカナシャイン",
				'zh-tw': "奧祕閃耀",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは手札に加える。",
				'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方2張卡，選擇其中任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡加入手牌。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ブレインウェーブ",
				'zh-tw': "腦力波",
			},
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[超]エネルギーの数×30ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586579,
				tcgplayer: 571316,
			},
		},
	],

	evolveFrom: {
		ja: "キルリア",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [282],
};

export default card;
