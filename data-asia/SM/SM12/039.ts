import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナアーラ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "遥か 大昔の 文献に 月を 誘いし 獣と いう 名前で 記録が 残っている。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がちりんのめぐみ" },
			effect: {
				ja: "自分の場に「ソルガレオ」がいるなら、自分の番に1回使える。自分の山札にあるエネルギーを2枚まで、自分の場の「ソルガレオ」または「ルナアーラ」に好きなようにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ルナブラスト" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554861,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [792],
};

export default card;
