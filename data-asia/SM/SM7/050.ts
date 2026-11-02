import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "カイオーガと 死闘の末 長い 眠りに ついた。 大地の 化身と 言われる 伝説の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶちこわす" },
			damage: "50+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、50ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "グラウンドスラッシュ" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559011,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [383],
};

export default card;
