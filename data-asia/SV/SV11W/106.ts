import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "潜水が 得意な とりポケモン。 好物の みずゴケを 食べるため 水中を 泳ぎまわる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しょうか" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "つばさでうつ" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [580],
	thirdParty: {
		cardmarket: 829462,
		tcgplayer: 636659,
	},
};

export default card;
