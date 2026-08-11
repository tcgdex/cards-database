import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
		'zh-tw': "阿利多斯",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "糸を はいて 獲物を 捕らえる。 夜に なると 巣から 離れて 積極的に 狩りを するぞ。",
		'zh-tw': "會吐絲來捕捉獵物。每到夜晚就會離開巢穴，積極地展開狩獵。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スパイダーネット",
				'zh-tw': "蜘蛛網",
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチの進化ポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。選擇對手的備戰區的1隻進化寶可夢，與戰鬥寶可夢互換。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どくばり",
				'zh-tw': "毒針",
			},
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586614,
				tcgplayer: 571351,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578401,
			},
		},
	],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [168],
};

export default card;
