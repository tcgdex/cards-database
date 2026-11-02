import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カポエラー",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "ツノを 軸に 回転しながら 華麗な キックを お見舞いする。 ツノは 生涯 伸び続ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スピンドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。",
			},
		},
		{
			name: { ja: "けたぐり" },
			damage: 50,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864053,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [237],
};

export default card;
