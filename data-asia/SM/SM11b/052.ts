import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ",
	},

	illustrator: "Tomomi Kaneko",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "世話を 焼かれる ことが 大嫌い。 トレーナーの 指示を 聞かないので 仲良く なるのが 難しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バブルホールド" },
			damage: 80,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555259,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [393],
};

export default card;
