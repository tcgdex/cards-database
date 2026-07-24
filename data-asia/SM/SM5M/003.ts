import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "プライドが 高く 人から 食べ物を もらう ことを 嫌う。 長い 産毛が 寒さを 防ぐ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずとばし" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559816,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [393],
};

export default card;
