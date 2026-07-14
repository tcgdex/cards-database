import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "マーイーカ",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "光の 点滅で 襲ってきた 敵の 戦意を なくしてしまう。 その 隙に 姿を くらますのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょうたつ" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "かいてんアタック" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [686],

	thirdParty: {
		cardmarket: 888304,
	},
};

export default card;
