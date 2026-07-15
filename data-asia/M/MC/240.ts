import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "電気を 自在に 操る。 真っ黒な 雷雲の 中に 巣があると 言い伝えられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんじは" },
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "10まんボルト" },
			damage: 190,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863536,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [145],
};

export default card;
