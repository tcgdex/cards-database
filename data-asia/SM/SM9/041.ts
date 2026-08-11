import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドクイン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "ウロコで 覆われた 頑丈な 体で 巣穴の 入り口を ふさぎ 敵から 子供たちを 守る。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マザーコール" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にあるポケモン（「ポケモンGX・EX」をのぞく）を1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワーラリアット" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの進化ポケモンの数x50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558340,
			},
		},
	],

	evolveFrom: {
		ja: "ニドリーナ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [31],
};

export default card;
