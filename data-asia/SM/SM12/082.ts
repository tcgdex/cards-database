import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "エレザード",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "エリマキを 広げて 発電する。 エレザード １匹で 高層ビルで 必要な 電気を 作れるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パラボラカウンター" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "相手の場に[雷]ポケモンがいるなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "エレキック" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554994,
			},
		},
	],

	evolveFrom: {
		ja: "エリキテル",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [695],
};

export default card;
