import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダスVMAX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ガラクタあつめ" },
			effect: {
				ja: "このポケモンは、「ポケモンのどうぐ」を2枚までつけられる。（この特性がなくなったとき、自分は「ポケモンのどうぐ」を1枚になるようにトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キョダイシュウキ" },
			damage: 120,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572063,
				tcgplayer: 569404,
			},
		},
	],

	evolveFrom: {
		ja: "ダストダスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [569],
};

export default card;
