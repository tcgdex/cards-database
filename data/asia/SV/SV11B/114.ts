import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ツンベアー",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'ja-jp': "吐く 息を 自在に 凍らせる。 泳ぎが 得意で 北の 海を 泳ぎまわり 獲物を 捕まえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "50x",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数×50ダメージ。",
			},
		},
		{
			name: { ja: "ぜったいれいど" },
			damage: 150,
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		'ja-jp': "クマシュン",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [614],

	thirdParty: {
		cardmarket: 829357,
		tcgplayer: 636468,
	},
};

export default card;
