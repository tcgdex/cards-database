import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコ",
	},

	illustrator: "Yoko Hishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "動くものを つい 追ってしまう。 自分の 尻尾を 追いかけて 同じ 場所を グルグル 回る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこキック" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863887,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [300],
};

export default card;
