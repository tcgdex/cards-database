import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "５０キロ 先に いる 獲物を 見つけると 砂漠を 泳ぐように 移動して 飛びかかり 噛みつく。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ガブガブパニック" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x50ダメージ。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 100,
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557419,
			},
		},
	],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [553],
};

export default card;
