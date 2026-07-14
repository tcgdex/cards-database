import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ラムパルドex",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はかいのずつき" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ランページハンマー" },
			damage: 150,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+150」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ズガイドス",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [409],

	suffix: "EX",

	thirdParty: {
		cardmarket: 888298,
	},
};

export default card;
