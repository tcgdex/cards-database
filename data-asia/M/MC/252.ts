import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "けとばす" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エレキバレット" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863548,
			},
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [523],
};

export default card;
