import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "額の ツノは 子どもに エサを 与えるときに 刺さらないよう 退化したと 考えられている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 60,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899945,
				tcgplayer: 709195,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♀",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [30],
};

export default card;
