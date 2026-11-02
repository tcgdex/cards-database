import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "デンヂムシ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "喰らった 餌を 消化 するとき 発生した 電気エネルギーを 電気袋に 溜め込んでいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しびれアゴ" },
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561620,
			},
		},
	],

	evolveFrom: {
		ja: "アゴジムシ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [737],
};

export default card;
