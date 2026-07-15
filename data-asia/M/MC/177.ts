import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ルンパッパ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "陽気な リズムの 音波を 受けると エネルギーを 作りだす 仕組みを 全身に 持っている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バイタルサンバ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場のポケモン全員の最大HPは、それぞれ「＋40」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863473,
			},
		},
	],

	evolveFrom: {
		ja: "ハスブレロ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [272],
};

export default card;
