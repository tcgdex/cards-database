import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミカルゲ",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "１０８個の 魂で できている。 二度と 悪さを しないように 要石に 縛りつけられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たましいエンド" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分のトラッシュに、特性「ばけがくれ」を持つポケモンが13枚以上あるなら、相手のポケモンを2匹選び、それぞれのっているダメカンの数が4倍になるように、ダメカンをのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888276,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [442],
};

export default card;
