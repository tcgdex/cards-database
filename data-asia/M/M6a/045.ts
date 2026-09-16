import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの 両側に 小さい 電気袋を 持つ。 ピンチのときに 放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみなりおとし" },
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "このポケモンについている[L]エネルギーをすべてトラッシュし、相手のポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908223,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [25],
};

export default card;
