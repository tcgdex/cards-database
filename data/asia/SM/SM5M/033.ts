import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ネクロズマ あかつきのつばさGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "インベイジョン" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンを自分のバトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やみのせんこう" },
			damage: 120,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "イクリプスムーンGX" },
			damage: 180,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザは、自分のサイドの残り枚数が、相手より多いときにしか使えない。次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559846,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [800],

	suffix: "GX",
};

export default card;
