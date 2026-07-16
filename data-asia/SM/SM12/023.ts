import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "敵に 襲われると 全身の 羽毛から 水しぶきを 出す。 水煙に 紛れて 逃げるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つばめがえし" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554808,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [580],
};

export default card;
