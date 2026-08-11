import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "おとなしい 顔で 相手を 油断 させてから おおあごで がぶり。 かみつくと 絶対に 放さない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560343,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [303],
};

export default card;
