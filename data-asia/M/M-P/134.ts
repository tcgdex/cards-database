import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},

	illustrator: "UKUMO uiti",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひとやすみ" },
			cost: ["Colorless"],
		},
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	rarity: "Promo",
	dexId: [133],
};

export default card;
