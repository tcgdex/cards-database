import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギルガルド",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'ja-jp': "王の 素質を 持つ 人間を 見抜くらしい。 認められた 人は やがて 王になると 言われている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "しをきざむ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このワザを受けたポケモンは、ワザのダメージを受けたらきぜつする。",
			},
		},
		{
			name: { ja: "ドレインスラッシュ" },
			damage: 90,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559580,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニダンギル",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [681],
};

export default card;
