import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "グライオン",
	},

	illustrator: "Yoshinobu Saito",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "尻尾で 木の枝に ぶら下がり 獲物を 観察する。 すきを 見て 上空から 襲いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とどめのはり" },
			damage: 70,
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっていないなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "ハサミギロチン" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561428,
			},
		},
	],

	evolveFrom: {
		ja: "グライガー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [472],
};

export default card;
