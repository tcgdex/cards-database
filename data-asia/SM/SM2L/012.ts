import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ママンボウ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "傷ついた ポケモンを 抱きしめ 特殊な 粘液で 傷を ふさぐ。 その理由は 不明。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きしにはこぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分または相手のトラッシュにあるたねポケモンを1枚、持ち主のベンチに出す。",
			},
		},
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561416,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [594],
};

export default card;
