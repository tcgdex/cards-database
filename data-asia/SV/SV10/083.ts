import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のポリゴンZ",
		'zh-tw': "<火箭隊的>多邊獸Ｚ",
		'zh-cn': "<火箭隊的>多邊獸Ｚ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "さらに 優れた ポケモンを 目指し 追加した プログラムに 不具合が あったらしく 動きが おかしい。",
		'zh-tw': "以成為更優秀的寶可夢為目標 所新追加的程式好像狀況不佳， 使得動作變得很奇怪。",
		'zh-cn': "以成為更優秀的寶可夢為目標 所新追加的程式好像狀況不佳， 使得動作變得很奇怪。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さいこうちく",
				'zh-tw': "再構築",
				'zh-cn': "再構築",
			},
			effect: {
				ja: "自分の番に、自分の手札を2枚トラッシュするなら、1回使える。自分の山札を1枚引く。",
				'zh-tw': "在自己的回合，若將自己的2張手牌丟棄，則可使用1次。從自己的牌庫抽出1張卡。",
				'zh-cn': "在自己的回合，若將自己的2張手牌丟棄，則可使用1次。從自己的牌庫抽出1張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "Rコマンド",
				'zh-tw': "R指令",
				'zh-cn': "R指令",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、名前に「ロケット団」とつくサポートの枚数×20ダメージ。",
				'zh-tw': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
				'zh-cn': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821915,
				tcgplayer: 628724,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のポリゴン２",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [474],
};

export default card;
