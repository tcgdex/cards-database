import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "パラス",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "穴を 掘り 木の根っこから 栄養を 取るが ほとんどは 背中の キノコに 奪われる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きゅうけつ" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863291,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [46],
};

export default card;
