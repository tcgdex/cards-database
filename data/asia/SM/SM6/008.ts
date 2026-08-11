import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴーゴート",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "山岳地帯で 生活する。 ツノを ぶつけ合う 力比べの 勝者が 群れの リーダーだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミルクのみ" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x40ダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "すてみタックル" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559553,
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
