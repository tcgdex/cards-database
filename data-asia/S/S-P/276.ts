import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "お腹の ホタチで 戦う。 攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たたく" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 606614,
				tcgplayer: 597449,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [501],
};

export default card;
