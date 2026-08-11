import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "タッツー",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "水面から 勢いよく 墨を 発射して 飛んでいる 虫を 撃ち落とすことがあるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ウォーターアロー" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561080,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [116],
};

export default card;
