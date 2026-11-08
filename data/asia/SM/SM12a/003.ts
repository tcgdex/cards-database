import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "パラセクト",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "ムシの 方は ほぼ 死んでいて 本体は 背中の キノコだ。 もげると もう 動かなくなる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パニックほうし" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、ポケモンチェックのたび、相手のこんらんのポケモンにダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふしぎなこな" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543381,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "パラス",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [47],
};

export default card;
