import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "バンギラス",
	},

	illustrator: "Hironobu Yoshida",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "バンギラスが 暴れると 山が 崩れ 川が 埋まるため 地図を 書き換える ことになる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "たたきつける" },
			damage: "60×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x60ダメージ。",
			},
		},
		{
			name: { ja: "なぎたおす" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモン全員に、コインを1回ずつ投げ、オモテが出たポケモンに、それぞれ60ダメージ。このワザのダメージは、弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559188,
			},
		},
	],

	evolveFrom: {
		ja: "サナギラス",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [248],
};

export default card;
