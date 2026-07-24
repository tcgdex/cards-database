import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンドパン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "鋼の針を 氷が おおう。 刺さると 深い 傷と 一緒に 凍傷にも なってしまうぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トゲのよろい" },
			damage: 30,
			cost: [],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			},
		},
		{
			name: { ja: "こおりのいぶき" },
			damage: 90,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559815,
			},
		},
	],

	evolveFrom: {
		ja: "アローラサンド",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [28],
};

export default card;
