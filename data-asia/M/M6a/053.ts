import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マッハボルト" },
			damage: 20,
			cost: ["Lightning"],
		},
		{
			name: { ja: "イナズマドライブ" },
			damage: 140,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについている[L]エネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908231,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [1008],
};

export default card;
