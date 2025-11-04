import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ズルッグ",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "皮を 首まで 引き上げて 防御の 姿勢。 ゴムのような 弾力で ダメージを 減らす。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "ずつき" }, damage: 10, cost: ["Darkness"] },
		{
			name: { ja: "せめこむ" },
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [559],
};

export default card;
