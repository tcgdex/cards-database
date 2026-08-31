import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "さえずる 声は 美しいが 縄張りに 入った 相手は 容赦しない 荒々しさだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899985,
				tcgplayer: 709213,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [661],
};

export default card;
