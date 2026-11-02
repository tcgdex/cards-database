import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ワタッコ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "どんな 風に あおられても 綿毛を 自在に 操って 世界の 好きなところへ 行ける。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ロストマーチ" },
			damage: "20×",
			cost: ["Grass"],
			effect: {
				ja: "自分のロストゾーンにあるポケモン（♢（プリズムスター）をのぞく）の枚数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558650,
			},
		},
	],

	evolveFrom: {
		ja: "ポポッコ",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [189],
};

export default card;
