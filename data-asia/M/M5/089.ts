import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スキルシーフ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の手札が1枚もないなら、相手の場のポケモンが持つワザを1つ選び、このワザとして使う。",
			},
		},
		{
			name: { ja: "するどいキバ" },
			damage: 80,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888634,
			},
		},
	],

	evolveFrom: {
		ja: "クスネ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [828],
};

export default card;
