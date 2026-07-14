import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルト",
	},

	illustrator: "HICO KIM",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フラッシュバリア" },
			damage: 50,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ラクライ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [310],

	thirdParty: {
		cardmarket: 888631,
	},
};

export default card;
