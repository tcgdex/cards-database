import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "マンムー",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "１万年前の 氷の 下から 発見された ことも あるほど 大昔から いた ポケモン。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ダブルスタンプ" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x30ダメージ追加。",
			},
		},
		{
			name: { ja: "ごういんタックル" },
			damage: "90+",
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンを9個までのせ、のせた数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560256,
			},
		},
	],

	evolveFrom: {
		ja: "イノムー",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [473],
};

export default card;
