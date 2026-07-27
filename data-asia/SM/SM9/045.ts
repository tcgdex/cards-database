import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "メノクラゲ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "海辺を 漂い 獲物を 探す。 毒の 触手は ちぎれることも あるが 時間が 経てば 生えてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まきつく" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558350,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [72],
};

export default card;
