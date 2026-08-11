import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のファイヤーex",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フレイムバリア" },
			damage: 110,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
		{
			name: { ja: "イビルバーン" },
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている「ロケット団エネルギー」を1枚選び、トラッシュする。その場合、相手のバトルポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821956,
				tcgplayer: 629065,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [146],

	suffix: "EX",
};

export default card;
