import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "デリバード",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "自分の 餌を 人や ポケモンに 分け与える 習性が あるため いつも 餌を 探しまわっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハッピーデリバリー" },
			cost: ["Colorless"],
			effect: {
				ja: "「ポケモンのどうぐ」がついていない自分のベンチポケモンを好きなだけ選ぶ。その後、選んだ数ぶんまでの「ポケモンのどうぐ」を自分の山札から選び、選んだポケモンにそれぞれつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "はばたく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558665,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [225],
};

export default card;
