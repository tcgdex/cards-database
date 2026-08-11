import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ヌメルゴンV",
		'zh-tw': "洗翠 黏美龍V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぬるりところばす",
				'zh-tw': "滑溜打滾",
			},
			damage: 60,
			cost: ["Water", "Metal"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
				'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			},
		},
		{
			name: {
				ja: "シェルローリング",
				'zh-tw': "硬殼回轉",
			},
			damage: 140,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656379,
				tcgplayer: 570719,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [706],
};

export default card;
