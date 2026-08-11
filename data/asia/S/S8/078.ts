import { Card } from "models/database/card";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメルゴン",
		'zh-tw': "黏美龍",
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'ja-jp': "長い ツノを 伸ばす 勢いで 攻撃。 威力は ヘビー級 ボクサーの パンチの １００倍だ。",
		'zh-tw': "用伸長角產生的力道來攻擊對手，產生的威力比重量級拳擊手的拳擊還強１００倍。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ぬるぬるルーム",
				'zh-tw': "黏黏滑滑空間",
			},
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手は手札からエネルギーをポケモンにつけるとき、つける前にコインを1回投げる。ウラなら、そのエネルギーはつけたことにならず、トラッシュする。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌將能量附於寶可夢身上時，附上前擲1次硬幣。若為反面，則那個能量不附上，將其丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "バスターテール",
				'zh-tw': "光炮尾",
			},
			damage: 120,
			cost: ["Water", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575633,
				tcgplayer: 569579,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌメイル",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [706],
};

export default card;
