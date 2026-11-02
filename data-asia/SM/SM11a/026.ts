import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイクルドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札を1枚トラッシュする。その後、山札を2枚引く。",
			},
		},
		{
			name: { ja: "エネアシスト" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを2枚、自分のベンチポケモンに好きなようにつける。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556630,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [479],
};

export default card;
