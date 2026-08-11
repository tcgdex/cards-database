import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウェルカモ",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "様々な 地方の ポケモンや 人の 動きを 見て 自らの 踊りに 取り入れる 努力家。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アクアエッジ" },
			damage: 40,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863508,
			},
		},
	],

	evolveFrom: {
		ja: "クワッス",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [913],
};

export default card;
