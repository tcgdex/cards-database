import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガマフォクシーex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "トリックポータル" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を上から9枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "あやしいともしび" },
			damage: 200,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888188,
			},
		},
	],

	evolveFrom: {
		ja: "テールナー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [655],

	suffix: "EX",
};

export default card;
