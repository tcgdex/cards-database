import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "キバゴ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "木の実を キバで 砕いて 食べる。 何回も 生え変わることで 強く 鋭い キバに なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちからをあつめる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [610],
};

export default card;
