import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゼブライカ",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "けとばす" }, damage: 30, cost: ["Colorless"] },
		{
			name: { ja: "エレキバレット" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "シママ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [523],
	thirdParty: {
		cardmarket: 829468,
		tcgplayer: 636665,
	},
};

export default card;
