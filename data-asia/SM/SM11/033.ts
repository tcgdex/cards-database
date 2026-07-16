import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナノ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "群れで 行動する 習性。 眠る ときは 洞窟の 中で 仲間たちと 体を 寄せ合う。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ごきげんピック" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556995,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Common",
	dexId: [360],
};

export default card;
