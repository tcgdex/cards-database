import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアルex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "おいつめる" },
			damage: 80,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ストロングバイト" },
			damage: "140+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 858264,
			},
		},
	],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [553],

	suffix: "EX",
};

export default card;
