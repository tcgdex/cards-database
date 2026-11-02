import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "大きく 空気を 吸い込むのは 攻撃の サイン。 １７００度の 炎が 襲ってくるぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーエール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「イーブイ」から進化する「ポケモンGX」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "のポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543486,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [136],
};

export default card;
