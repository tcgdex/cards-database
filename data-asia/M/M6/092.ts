import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかずちをまとう" },
			cost: ["Lightning"],
			effect: {
				ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からエネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "パワーラッシュ" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 900123,
				tcgplayer: 709245,
			},
		},
	],

	retreat: 0,
	regulationMark: "J",
	rarity: "Mega Hyper Rare",
	dexId: [243],

	suffix: "EX",
};

export default card;
