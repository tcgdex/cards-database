import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マンタイン",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳いで スピードが のってくると 波の上に 飛びだし そのまま １００メートルも 滑空 する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water"],
		},
		{
			name: { ja: "ウォーターダイブ" },
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863468,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [226],
};

export default card;
