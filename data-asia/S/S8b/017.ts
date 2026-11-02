import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
		'zh-tw': "噴火龍",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "岩石も 焼けるような 灼熱の 炎を 吐いて 山火事を 起こすことが ある。",
		'zh-tw': "會噴出彷彿連岩石都能燒焦的灼熱火焰。有時會引發森林火災。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "バトルセンス",
				'zh-tw': "戰鬥意識",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から3枚見て、その中からカードを1枚選び、手札に加える。残りのカードはトラッシュする。",
				'zh-tw': "在自己的回合時，可使用1次。查看自己的牌庫上方3張卡，選擇其中1張卡加入手牌。將剩餘卡丟棄。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "キングブレイズ",
				'zh-tw': "王者火焰",
			},
			damage: "100+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分のトラッシュにある「ダンデ」の枚数×50ダメージ追加。",
				'zh-tw': "增加自己的棄牌區的「丹帝」的張數×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586532,
				tcgplayer: 571270,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "None",
	dexId: [6],
};

export default card;
