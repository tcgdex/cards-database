import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "フェローチェ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "ＵＢの 一種。 この世界の ものに けがれを 感じるのか 一切 手を 触れようと しない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびひざげり" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ホワイトレイ" },
			damage: "90+",
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分のサイドの残り枚数が1枚なら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559554,
			},
		},
	],

	retreat: 0,
	rarity: "Rare",
	dexId: [795],
};

export default card;
