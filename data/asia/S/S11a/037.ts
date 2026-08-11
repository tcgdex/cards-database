import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア",
		'zh-tw': "奇魯莉安",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "トレーナーが 喜ぶと キルリアに エネルギーが 満ちあふれ 楽しそうに くるくると 踊る。",
		'zh-tw': "當訓練家高興的時候，奇魯莉安會充滿能量，開心地轉著圈跳舞。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "リファイン",
				'zh-tw': "洗鍊",
			},
			effect: {
				ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。",
				'zh-tw': "在自己的回合時，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出2張卡。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ビンタ",
				'zh-tw': "巴掌",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673035,
				tcgplayer: 570800,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570887,
			},
		},
	],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [281],
};

export default card;
