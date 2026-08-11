import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ブニャット",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "ほかの ポケモンの 住処でも 居心地が 良ければ 居座って 自分の 住処に してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドラネコダッシュ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで、1枚トラッシュする。この番、このポケモンが「ニャルマー」から進化していたなら、さらに1枚トラッシュする。",
			},
		},
		{
			name: { ja: "つきたおし" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558160,
			},
		},
	],

	evolveFrom: {
		ja: "ニャルマー",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [432],
};

export default card;
