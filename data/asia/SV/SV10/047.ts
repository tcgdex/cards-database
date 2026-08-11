import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "コノヨザル",
		'zh-tw': "棄世猴",
		'zh-cn': "棄世猴",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "怒りのボルテージが 臨界点を 超えたとき 肉体という 枠に 縛られない パワーを 手に入れた。",
		'zh-tw': "在怒氣突破臨界點時， 獲得了能夠擺脫 肉體束縛的力量。",
		'zh-cn': "在怒氣突破臨界點時， 獲得了能夠擺脫 肉體束縛的力量。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ふんどのつぼ",
				'zh-tw': "憤怒穴",
				'zh-cn': "憤怒穴",
			},
			effect: {
				ja: "このポケモンにダメカンが2個以上のっているなら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
				'zh-tw': "若這隻寶可夢身上放置有2個以上的傷害指示物，則這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
				'zh-cn': "若這隻寶可夢身上放置有2個以上的傷害指示物，則這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "インパクトブロー",
				'zh-tw': "衝擊打擊",
				'zh-cn': "衝擊打擊",
			},
			damage: 160,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "次の自分の番、このポケモンは「インパクトブロー」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
				'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821879,
				tcgplayer: 628688,
			},
		},
	],

	evolveFrom: {
		ja: "オコリザル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [979],
};

export default card;
