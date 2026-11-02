import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "尻尾で 電気を 作り出す。 全身を 雷雲に 隠して イッシュ地方の 空を 飛ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひきさく" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "らいげき" },
			damage: 150,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559303,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [644],
};

export default card;
