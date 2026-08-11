import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "デンチュラ",
		'zh-tw': "電蜘蛛",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。",
		'zh-tw': "發射腹部帶電的毛來攻擊。 要是被牠的毛刺中， 就會全身麻痺三天三夜。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふくがん" },
			effect: {
				ja: "このポケモンが使うワザの、相手のバトル場の特性を持つポケモンへのダメージは「+50」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ビリビリウェブ",
				'zh-tw': "‌[特性]複眼",
			},
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンに[L]エネルギーがついているなら、80ダメージ追加。",
				'zh-tw': "這隻寶可夢使用的招式，對對手的戰鬥場的擁有特性的寶可夢造成的傷害「+50」點。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773751,
				tcgplayer: 566253,
			},
		},
	],

	evolveFrom: {
		ja: "バチュル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [596],
};

export default card;
