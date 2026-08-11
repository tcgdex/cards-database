import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "シルヴァディ",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "本来の 力を 解き放つ 最後の ファクターは 信頼する トレーナーとの 絆 だった。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バディコール" },
			effect: {
				ja: "自分の手札が1枚もないなら、自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エアスラッシュ" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888336,
			},
		},
	],

	evolveFrom: {
		ja: "タイプ：ヌル",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [773],
};

export default card;
