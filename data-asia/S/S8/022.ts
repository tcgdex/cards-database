import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "オーダイル",
		'zh-tw': "大力鱷",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "大きく 力強い アゴで かみつくと そのまま 首を振って 相手を ずたずたに 引きちぎる。",
		'zh-tw': "會用大而有力的雙顎咬住對手然後甩動脖子，將對手撕成碎片。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "あばれんぼう",
				'zh-tw': "暴徒",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、必ず1回使う。コインを1回投げオモテなら、相手の山札を上から5枚トラッシュする。ウラなら、自分の山札を上から5枚トラッシュする。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，一定要使用1次。擲1次硬幣若為正面，則將對手的牌庫上方5張卡丟棄。若為反面，則將自己的牌庫上方5張卡丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かみくだく",
				'zh-tw': "咬碎",
			},
			damage: 140,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575577,
				tcgplayer: 569523,
			},
		},
	],

	evolveFrom: {
		ja: "アリゲイツ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [160],
};

export default card;
