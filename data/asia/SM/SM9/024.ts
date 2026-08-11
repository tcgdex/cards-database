import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "コダック",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "念力を 使うと 頭痛が するので 普段は なるべく 何も しないで ボーっと 過ごしているよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつう" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、相手は手札からトレーナーズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558302,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [54],
};

export default card;
