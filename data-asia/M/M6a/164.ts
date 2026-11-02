import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アルセウスVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	stage: "VSTAR",

	attacks: [
		{
			name: { ja: "トリニティノヴァ" },
			damage: 200,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908342,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Classic Collection",
	dexId: [493],
};

export default card;
