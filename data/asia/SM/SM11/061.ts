import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イベルタル",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'ja-jp': "翼と 尾羽を 広げて 赤く 輝くとき 生き物の 命を 吸い取る 伝説の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふきぬける" },
			damage: "20+",
			cost: ["Darkness"],
			effect: {
				'ja-jp': "場にスタジアムが出ているなら、20ダメージ追加。",
			},
		},
		{
			name: { ja: "シャドーインパクト" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "自分のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557023,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [717],
};

export default card;
