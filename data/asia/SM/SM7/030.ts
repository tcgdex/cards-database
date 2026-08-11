import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラブカス",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "カップルに 人気が 高いので ハネムーン客が 泊まる ホテルの プールに 放流 される。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おあいこ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にあるたねポケモンを、相手のベンチポケモンの数ぶんまで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "みずのはどう" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558991,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [370],
};

export default card;
