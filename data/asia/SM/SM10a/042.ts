import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハトーボー",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "ハトーボーの 住む 森の 奥には 争いのない 平和な 国が あると 信じられている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エアスラッシュ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557321,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マメパト",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [520],
};

export default card;
