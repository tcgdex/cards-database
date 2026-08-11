import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "子どもの声を 真似 人を 森の 奥深くへ 迷いこませる。 自分の仲間に する つもりなのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つぶやく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ホロウショット" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556633,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [708],
};

export default card;
