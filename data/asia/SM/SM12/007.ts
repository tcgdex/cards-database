import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モクロー",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "刃物の ように 鋭い 羽を 飛ばして 攻撃。 足の力も 強く キックも 侮れないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくれんぼ" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554759,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [722],
};

export default card;
