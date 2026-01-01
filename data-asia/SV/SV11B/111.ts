import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "アバゴーラ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "海と 陸地で 生活する。 張り手で タンカーの 船底に 穴を 開ける パワーの 持ち主。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マイティシェル" },
			effect: {
				ja: "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじりつく" },
			damage: 150,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "アバゴーラGX",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [565],
};

export default card;
