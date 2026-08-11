import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デスカーン",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "本物の かんおけと 間違え 近寄ってきた 墓ドロボウを 体の 中に 閉じこめてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ソウルジャグリング" },
			damage: "10+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモンを好きなだけトラッシュし、トラッシュしたベンチポケモンの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558845,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "デスマス",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [563],
};

export default card;
