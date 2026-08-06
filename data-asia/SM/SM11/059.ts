import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "数匹のグループで 行動する。 ちんたら 歩きまわり 目が 合った 相手に いきなり 頭突きを かます。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いばる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "はりたおす" },
			damage: 50,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557021,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [559],
};

export default card;
