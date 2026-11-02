import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドラン♀",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "オスよりも 匂いに 敏感。 ヒゲで 風向きを 確認しながら 風下で エサを 探すのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908251,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [29],
};

export default card;
