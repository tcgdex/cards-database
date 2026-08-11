import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "テッカグヤ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "ＵＢの 一種。 ２本の 腕から ガスを 噴きだし 森を 焼き払う 姿が 確認 されている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ムーンレイカー" },
			damage: 160,
			cost: ["Metal", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザは、おたがいのサイドの残り枚数の合計が6枚なら、[鋼]エネルギー1個で使える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559019,
			},
		},
	],

	retreat: 4,
	rarity: "Rare",
	dexId: [797],
};

export default card;
