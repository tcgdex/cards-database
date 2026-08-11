import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "人懐っこい ポケモンだけど 無理やり 触ると 身体を 一気に 発熱させるので 火傷 するぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557242,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [661],
};

export default card;
