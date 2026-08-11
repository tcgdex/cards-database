import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロデスナ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "人を 操り 砂の山を 砂の城まで 進化 させた。 呪いの 力も あがっている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すなじごく" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "さじんのあらし" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "おたがいのバトルポケモンについているカードを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561090,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スナバァ",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [770],
};

export default card;
