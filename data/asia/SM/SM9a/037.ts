import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シュシュプ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		'ja-jp': "かいだ 者を うっとりさせる 香りを 体から 漂わせる。 食べた もので 香りが 変わる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひとやすみ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「20」回復する。",
			},
		},
		{
			name: { ja: "ようせいのかぜ" },
			damage: 10,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558224,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [682],
};

export default card;
