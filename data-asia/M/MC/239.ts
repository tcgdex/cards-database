import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "電気を 自在に 操る。 真っ黒な 雷雲の 中に 巣があると 言い伝えられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ついげきボルト" },
			damage: "20+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
		{
			name: { ja: "ドリルくちばし" },
			damage: 80,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863535,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [145],
};

export default card;
