import { Card } from "models/database/card";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミカルゲ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "５００年前に 悪さをしたため 要石の ひび割れに 体を つなぎとめられてしまった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しろなきせかい" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにあるサポートを2枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "せんりつ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559838,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [442],
};

export default card;
