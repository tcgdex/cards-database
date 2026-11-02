import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨルノズク",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ものごとを 考えだすと 首を １８０度 回転 させて 頭の 働きを 高める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つばさでうつ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "やまにつれさる" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンと、相手のベンチポケモンを1匹選び、それぞれのポケモンと、ついているすべてのカードを、山札にもどして切る。相手のベンチポケモンがいないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463029,
				tcgplayer: 597246,
			},
		},
	],

	evolveFrom: {
		ja: "ホーホー",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [164],
};

export default card;
