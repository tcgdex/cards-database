import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "シビビール",
		'zh-tw': "麻麻鰻",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "食欲 旺盛な ポケモン。 獲物を 見つけると 襲いかかり 電気で しびれさせてから 食べる。",
		'zh-tw': "食慾旺盛的寶可夢。一發現獵物就會發動襲擊， 用電流使其麻痺後大快朵頤。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "でたとこショック",
				'zh-tw': "臨場衝擊",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "バチバチ",
				'zh-tw': "劈哩啪啦",
			},
			damage: 30,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667915,
				tcgplayer: 569971,
			},
		},
	],

	evolveFrom: {
		ja: "シビシラス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [603],
};

export default card;
