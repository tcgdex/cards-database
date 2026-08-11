import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツロイド",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "ＵＢの 一種。 意思が あるかは 不明だが 時折 少女の ような 仕草を みせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ナイトキャップ" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このワザは、相手のサイドの残り枚数が2枚のときにだけ使える。相手の場のポケモンが持っているワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "うつろなしょくしゅ" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558685,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [793],
};

export default card;
