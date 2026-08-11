import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴンベ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "長い 毛の 下に 食べ物を 隠すが 隠したことを 忘れて 異臭 騒ぎに なることも。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ごちそうサーチ" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、自分のトラッシュにある好きなカードを1枚、相手に見せてから、山札の上にもどす。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544206,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [446],
};

export default card;
