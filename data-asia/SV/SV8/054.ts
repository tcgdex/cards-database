import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
		'zh-tw': "超能妙喵",
		'zh-cn': "超能妙喵",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーを 出し続けていると ニャオニクスの 肉体にも ダメージが およぶ。",
		'zh-tw': "如果持續不斷釋放強大的 精神力量，超能妙喵的 肉體也會受到傷害。",
		'zh-cn': "如果持續不斷釋放強大的 精神力量，超能妙喵的 肉體也會受到傷害。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "さそうしっぽ",
				'zh-tw': "誘導之尾",
				'zh-cn': "誘導之尾",
			},
			effect: {
				ja: "自分の番に、自分の手札から「のんびりじゃらし」を1枚トラッシュするなら、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
				'zh-tw': "在自己的回合，若從自己的手牌將1張「悠哉尾草棒」丟棄，則可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
				'zh-cn': "在自己的回合，若從自己的手牌將1張「悠哉尾草棒」丟棄，則可使用1次。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコショット",
				'zh-tw': "精神射擊",
				'zh-cn': "精神射擊",
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
				cardmarket: 793488,
				tcgplayer: 587634,
			},
		},
	],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
