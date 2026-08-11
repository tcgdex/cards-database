import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアンGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "キャットウォーク" },
			effect: {
				ja: "前の相手の番に、自分の「ポケモンGX・EX」がきぜつしていたなら、自分の番に1回使える。自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。この番、すでに別の「キャットウォーク」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふくしゅう" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数x20ダメージ追加。追加できるダメージはポケモン9枚ぶんまで。",
			},
		},
		{
			name: { ja: "スラッシュバックGX" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557471,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [53],

	suffix: "GX",
};

export default card;
