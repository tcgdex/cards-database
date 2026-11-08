import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のニューラ",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "自分が 目立たないよう 暗闇に まぎれて 獲物に 襲いかかる とても ずる賢い ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ねくびをかく" },
			cost: ["Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹に、そのポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863750,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [215],
};

export default card;
