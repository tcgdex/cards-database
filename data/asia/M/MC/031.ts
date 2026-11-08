import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロズレイド",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "かぐわしい 花の 香りで 相手を 惑わせ いばらの ムチで 激しく 打ちつける。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しばりつける" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863322,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロゼリア",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [407],
};

export default card;
