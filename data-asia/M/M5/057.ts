import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "イーユイ",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "多くの 争いの 火種となった 勾玉に 集まった 妬みが 炎を まとい ポケモンとなった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うずまくねたみ" },
			damage: "20+",
			cost: ["Darkness"],
			effect: {
				ja: "このポケモンにダメカンが2個以上のっているなら、90ダメージ追加。このワザのダメージは弱点を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888315,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [1004],
};

export default card;
