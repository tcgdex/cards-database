import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "驚かせることが 生きがい。 首の 赤い玉に 耳を あてると 中から 悲鳴が 聞こえてくるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきつなめ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557393,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [200],
};

export default card;
