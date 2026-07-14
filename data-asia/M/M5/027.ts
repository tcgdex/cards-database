import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フォトンコード" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、このポケモンについている「基本[L]エネルギー」を2枚まで選び、ベンチポケモン1匹につけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみなり" },
			damage: 90,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [1008],

	thirdParty: {
		cardmarket: 888270,
	},
};

export default card;
