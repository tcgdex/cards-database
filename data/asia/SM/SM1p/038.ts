import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "迷信が はびこる 昔 災いを もたらすと 忌み嫌われ 山の 奥へと 追いやられた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みらいよち" },
			cost: ["Darkness"],
			effect: {
				ja: "自分または相手の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
		{
			name: { ja: "はめつのしらせ" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべて手札にもどす。次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561566,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [359],
};

export default card;
