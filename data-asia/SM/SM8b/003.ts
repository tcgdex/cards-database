import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギバナ",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "大きな 花びらを 広げ 太陽の 光を 浴びていると 体に 元気が みなぎっていく。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みつりんのぬし" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場のポケモンについているすべての基本[草]エネルギーは、それぞれ[草]エネルギー2個ぶんとしてはたらく。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソーラービーム" },
			damage: 90,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550501,
			},
		},
	],

	evolveFrom: {
		ja: "フシギソウ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [3],
};

export default card;
