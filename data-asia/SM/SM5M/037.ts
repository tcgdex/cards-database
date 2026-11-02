import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "１キロ先の 生き物の 種類や 気持ちを キャッチする。 波動を 操り 群れで 獲物を 狩る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はどうよち" },
			effect: {
				ja: "自分の場に「ガブリアス」がいるなら、自分の番に1回使える。自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スカッドジャブ" },
			damage: 70,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559850,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [448],
};

export default card;
