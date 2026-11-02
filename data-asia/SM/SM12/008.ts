import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "刃物の ように 鋭い 羽を 飛ばして 攻撃。 足の力も 強く キックも 侮れないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょくげきひこう" },
			cost: ["Grass"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554762,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [722],
};

export default card;
