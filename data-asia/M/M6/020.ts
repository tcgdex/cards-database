import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブルンゲル",
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "体の ほとんどが 海水と 同じ 成分で できている。 沈没船を 根城にする。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しんかいドロー" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を1枚引く。その後、のぞむなら、自分の手札を1枚選び、山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 100,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899897,
				tcgplayer: 709176,
			},
		},
	],

	evolveFrom: {
		ja: "プルリル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [593],
};

export default card;
