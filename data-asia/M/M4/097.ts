import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシex",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "リベンジフレイム" },
			effect: {
				ja: "自分の前の番に、自分のポケモンがきぜつしていたなら、このポケモンの「リベンジファング」のダメージは「180」多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リベンジファング" },
			damage: "80+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このワザのダメージは、「リベンジフレイム」の効果で多くなる場合がある。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "シシコ",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [668],

	suffix: "EX",
};

export default card;
