import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 50,
	types: ["Fairy"],

	description: {
		ja: "人気だが 数が 少ないので 貴重。 むやみに 見せびらかすと 泥棒に 狙われるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にんぎょうへんげ" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。その後、のぞむなら、自分の手札にある「リーリエのピッピ人形」を直接バトル場に出す。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555208,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [35],
};

export default card;
