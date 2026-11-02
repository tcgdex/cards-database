import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの 両側に 小さい 電気袋を 持つ。 ピンチのときに 放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでんダッシュ" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から「基本[L]エネルギー」を選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ピカボルト" },
			damage: 50,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908214,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [25],
};

export default card;
