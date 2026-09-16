import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "大雨と 大津波で 海を 広げた 神話の ポケモン。 グラードンと 激しく 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[W]エネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908191,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "None",
	dexId: [382],
};

export default card;
