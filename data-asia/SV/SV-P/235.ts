import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フワライド",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "体の 中で ガスを 作ったり 吐き出したり することで 空を 飛ぶ 高さを 調節する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶきみなかぜ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "バルーンリターン" },
			damage: 110,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807437,
			},
		},
	],

	evolveFrom: {
		ja: "フワンテ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [426],
};

export default card;
