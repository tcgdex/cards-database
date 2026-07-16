import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぎょぐんストーム" },
			damage: "20×",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "分の場の「ヨワシ（GXをふくむ）」の数×20ダメージ。",
			},
		},
		{
			name: { ja: "たいりょうGX" },
			cost: ["Colorless"],
			effect: {
				ja: "分の山札を上から12枚見て、その中にあるたねポケモンを好きなだけ、ベンチに出す。残りのカードは山札にもどして切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 547071,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [746],

	suffix: "GX",
};

export default card;
