import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメラ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],

	description: {
		ja: "最も 弱い ドラゴンポケモン。 皮膚が 乾くと 息が できないので 日陰で じーっと しているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Water", "Fairy"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561442,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [704],
};

export default card;
