import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーゴート",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "山岳地帯で 生活する。 ツノを ぶつけ合う 力比べの 勝者が 群れの リーダーだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リーフスラッガー" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「リーフスラッガー」のダメージは「+50」される。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 100,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558896,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メェークル",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [673],
};

export default card;
