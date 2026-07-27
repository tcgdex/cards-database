import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "フレフワン",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Fairy"],

	description: {
		ja: "さまざまな においを 作り出す。 相手の 嫌がる においを 出して 戦いを 有利に 進めるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きょうれつなかおり" },
			cost: ["Fairy"],
			effect: {
				ja: "コインを2回投げる。1回でもオモテなら、相手の手札を見て、オモテの数ぶんのカードを、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ミラクルコロン" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、特殊状態の中から1つを選び、相手のバトルポケモンをその状態にする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558225,
			},
		},
	],

	evolveFrom: {
		ja: "シュシュプ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [683],
};

export default card;
