import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
		'zh-tw': "超能妙喵",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "オスに 比べて すこし わがままで 攻撃的。 機嫌を 損ねると サイコパワーで 痛めつけられる。",
		'zh-tw': "性格要比雄性更任性一些，而且也更具攻擊性。要是惹得牠不高興，就會被牠用精神力量狠狠教訓。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "おまねきイヤー",
				'zh-tw': "招財耳",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札からサポートを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多2張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ちょうねんりき",
				'zh-tw': "超念力",
			},
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673040,
				tcgplayer: 570805,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570890,
			},
		},
	],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
