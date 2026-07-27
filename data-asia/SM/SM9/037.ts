import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "マルマイン",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "少しの 刺激に 反応して 爆発する。 バクダンボールという あだ名で 怖がられている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エレキシェイカー" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の場のポケモンについている[雷]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スピードボール" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558315,
			},
		},
	],

	evolveFrom: {
		ja: "ビリリダマ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [101],
};

export default card;
