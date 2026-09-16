import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーフゴー",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セレブレイト" },
			cost: ["Metal"],
			effect: {
				ja: "自分の手札が30枚なら、自分のサイドを2枚とる。その後、自分の手札をすべて山札にもどして切る。",
			},
		},
		{
			name: { ja: "トリプルスマッシュ" },
			damage: "50×",
			cost: ["Metal"],
			effect: {
				ja: "コインを3回投げ、オモテの数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908296,
			},
		},
	],

	evolveFrom: {
		ja: "コレクレー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [1000],
};

export default card;
