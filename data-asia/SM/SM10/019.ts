import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ズガドーン",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "クネクネ動いて 人に 近付くと 突然 頭を 爆発させた。 ウルトラビーストの 一種らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ブレイザー" },
			damage: "10+",
			cost: ["Fire"],
			effect: {
				ja: "ウラになっている自分のサイドを1枚、オモテにする。そのカードが[炎]エネルギーなら、50ダメージ追加。（対戦が終わるまで、そのサイドはオモテのまま。）",
			},
		},
		{
			name: { ja: "ひのたまサーカス" },
			damage: "50×",
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "自分の手札にある[炎]エネルギーを好きなだけトラッシュし、その枚数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557374,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [806],
};

export default card;
