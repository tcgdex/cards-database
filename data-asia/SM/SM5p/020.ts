import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "アグノム",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "ユクシー エムリット アグノムは 同じ タマゴから 生まれた ポケモンと 考えられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコアブダクション" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手のベンチポケモン1匹と、そのポケモンについているすべてのカードを、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "さいみんはどう" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559770,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [482],
};

export default card;
