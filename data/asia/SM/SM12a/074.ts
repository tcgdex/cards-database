import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マニューラ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "寒い 場所に 棲み アローラでは ロコンや サンドが 主な 餌。 獲物は 仲間で きちんと 分ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こごえるかぜ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "あくのいましめ" },
			damage: "50×",
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手の場の特性を持つポケモンの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543996,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニューラ",
	},

	retreat: 1,
	regulationMark: "B",
	rarity: "None",
	dexId: [461],
};

export default card;
