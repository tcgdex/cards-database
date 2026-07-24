import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーゴート",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "山岳地帯で 生活する。 ツノを ぶつけ合う 力比べの 勝者が 群れの リーダーだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミルクのみ" },
			cost: ["Grass"],
			effect: {
				ja: "コインを2回投げ、オモテの数x40ダメージぶん、このポケモンのHPを回復する。",
			},
		},
		{
			name: { ja: "すてみタックル" },
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
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
		ja: "メェークル",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [673],
};

export default card;
