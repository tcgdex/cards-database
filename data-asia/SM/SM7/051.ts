import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "メテノ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "強い 衝撃を うけると 殻は はがれ 落ちる。 ナノ粒子が 突然変異し 生まれたポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ほしふり" },
			effect: {
				ja: "自分の番に、このカードが手札にあり、自分のベンチに空きがあるなら、1回使える。このカードを手札から直接バトル場に出す。その場合、バトルポケモンはベンチへもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スピードスター" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559012,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [774],
};

export default card;
