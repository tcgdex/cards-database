import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラゴローニャ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 180,
	types: ["Lightning"],

	description: {
		ja: "気難しくて 頑固。 機嫌を 損ねると 全身から 放電し 雷鳴の ような 声で ほえる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "マグネボンバー" },
			damage: "20×",
			cost: [],
			effect: {
				ja: "自分のベンチポケモンについている[雷]エネルギーを好きなだけ、このポケモンにつけ替え、その枚数x20ダメージ。",
			},
		},
		{
			name: { ja: "ちょうでんじほう" },
			damage: 190,
			cost: ["Lightning", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558313,
			},
		},
	],

	evolveFrom: {
		ja: "アローラゴローン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [76],
};

export default card;
