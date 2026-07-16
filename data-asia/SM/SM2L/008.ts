import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "メノクラゲ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ビーチなどで 干からびているが まだ 生きていることも 多い。 水に 浸せば ふやけて 復活。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヘドロショック" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンのHPは、回復しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561412,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [72],
};

export default card;
